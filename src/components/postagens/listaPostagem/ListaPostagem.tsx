import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import './ListaPostagem.css';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';

function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])

    let history = useNavigate()
    
    const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
     );

    useEffect(() => {
        if(token === '') {
            alert("Você precisa estar logado. Por favor, realize o login!")
            history("/login")
        }
    }, [token])

    async function getPost() {
        await busca ("/posts", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <>
        { posts.map(post => (
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography gutterBottom>
                            Postagens
                        </Typography>
                        <Typography variant='h5' component='h2'>
                            {post.titulo}
                        </Typography>
                        <Typography variant='body2' component='p'>
                            {post.texto}
                        </Typography>
                        <Typography variant='body2' component='p'>
                            {post.tema?.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='center' mb={1.5}>
                            <Link to={`/formularioPost/${post.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant='contained' className='marginLeft' size='small'>Atualizar</Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarPost/${post.id}`} className="text-decorator-none">
                                <Box mx={1}>
                                    <Button variant="contained" size='small' color="secondary">
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
    )
}


export default ListaPostagem;