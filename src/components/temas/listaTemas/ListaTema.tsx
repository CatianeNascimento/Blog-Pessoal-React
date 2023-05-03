import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import Tema from '../../../models/Tema'
import { busca } from '../../../services/Services'
import './ListaTema.css';
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/TokensReducer'



function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([])

const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
     );
         let history = useNavigate();

    useEffect(()=> {
        if(token === '') {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(()=>{
        getTema()
    }, [temas.length])

    return (
        <>
        {
            temas.map(tema => (
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">{tema.descricao}</Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to={`/formularioTema/${tema.id}`} className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant='contained' className="marginLeft" size='small'>Atualizar</Button>
                                </Box>
                            </Link>
                            <Link to={`/deleteTema/${tema.id}`} className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant='contained' size='small'>
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            ))}
        </>
    );
}

export default ListaTema;