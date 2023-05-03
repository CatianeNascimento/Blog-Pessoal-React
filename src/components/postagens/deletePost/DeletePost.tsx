import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import './DeletePost.css'
import { useNavigate, useParams } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import { buscaId, deleteId } from '../../../services/Services'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/TokensReducer'
import { toast } from 'react-toastify'


function DeletePost() {

    let history = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
     );
    const [post, setPost] = useState<Postagem>()

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar Logado!', {
                position: 'top-right', 
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, 
                theme: 'colored', 
                progress: undefined,
            });
            history("/login")
        }

    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPost, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        history('/posts')

        try {
            await deleteId(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            toast.success('Postagem Deletada com Sucesso', {
                position: 'top-right', 
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, 
                theme: 'colored', 
                progress: undefined,
            });

        } catch (error) {
            alert('Erro ao Deletar!')
        }
    }

    function nao() {
        history('/posts')
    }

    return (
        <>
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Box justifyContent='center'>
                            <Typography gutterBottom>Deseja Deletar a Postagem: </Typography>
                            <Typography>{post?.titulo}</Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                            <Box mx={2}>
                                <Button onClick={sim} variant='contained' className='button' size='large'>Sim</Button>
                            </Box>
                            <Box>
                                <Button onClick={nao} variant='contained' className='button' size='large'>Não</Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}

export default DeletePost