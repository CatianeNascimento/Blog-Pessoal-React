import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroPost.css'
import { Button, Container, FormControl, TextField, InputLabel, Select, FormHelperText, Typography, MenuItem } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import { busca, buscaId, post, put } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';


function CadastroPost() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    
    const [temas, setTemas] = useState<Tema[]>([])

    const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
     );
    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado!', {
                position: 'top-right', 
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, 
                theme: 'colored', 
                progress: undefined,
            });
            navigate('/login')
        }
    }, [token])

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    const [postagens, setPostagens] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => {
        setPostagens({
            ...postagens,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`/postagens/${id}`, setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagens({
            ...postagens,
            [e.target.name]: e.target.value,
            tema: tema
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
           await put(`/postagens`, postagens, setPostagens, {
                headers: {
                    'Authorization': token
                }
            })

            toast.success('Postagem Atualizada com Sucesso', {
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
            alert('Erro ao atualizar, verifique os campos')
        }

        } else {
            try {
           await post(`/postagens`, postagens, setPostagens, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem Cadastrada com Sucesso', {
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
            alert('Erro ao cadastrar, verifique os campos')
        }
    }
        back()
    }

    function back() {
        navigate('/posts')
    }

    return (
        <Container maxWidth='sm' className='topo'>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' component='h1' align='center'>Formulário de cadastro de postagem</Typography>
                <TextField value={postagens.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id='titulo' label='titulo' variant='outlined' name='titulo' margin='normal' fullWidth></TextField>
                <TextField value={postagens.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id='texto' label='texto' name='texto' variant='outlined' margin='normal' fullWidth></TextField>

                <FormControl>
                    <InputLabel id='demo-simple-select-helper-label'>Tema</InputLabel>
                    <Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper' 
                    onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                        headers: {
                            'Authorization': token
                        }
                    })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a Postagem</FormHelperText>
                    <Button type='submit' variant='contained'>Finalizar</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPost