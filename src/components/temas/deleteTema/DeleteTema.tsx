import React, { ChangeEvent, useEffect, useState } from 'react'
import './DeleteTema.css'
import { Box } from '@mui/material'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Tema from '../../../models/Tema'
import { buscaId, deleteId, post, put } from '../../../services/Services'

function DeleteTema() {

    let history = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [token, setToken] = useLocalStorage('token')

    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            history("/login")
        }

    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        history('/temas')

        try {
            await deleteId(`/tema/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            alert('Tema deletado com sucesso!')
        } catch (error) {
            alert('Erro ao deletar');
        }
    }

    function nao() {
        history('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography gutterBottom>Deseja deletar o Tema:</Typography>
                            <Typography> Descrição do Tema</Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant='contained' className='button' size='large'>Sim</Button>
                                <Button onClick={nao} variant='contained' className='button' size='large'>Não</Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeleteTema