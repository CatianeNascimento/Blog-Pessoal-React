import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroTema.css'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema'
import { buscaId, post, put } from '../../../services/Services'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/TokensReducer'

function CadastroTema() {

    let history = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState['tokens']> (
        (state) => state.tokens
     );
     
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

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
        await buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("temas " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso')

            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro, por favor, tente novamente!")
            }

        } else {

            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert("Tema cadastrado com sucesso")
            } catch (error) {
                console.log(`Error: ${error}`)
                alert("Erro")
            }
        }
        
        back()
    }


    function back() {
        history('/temas')
    }

    return (
        <Container maxWidth='sm' className='topo'>
            <form onSubmit={onSubmit}>
                <Typography variant='h3' component='h1' align='center'>Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id='descricao' label='descricao' variant='outlined' name='descricao' margin='normal' fullWidth />
                <Button type='submit' variant='contained'>Finalizar</Button>
            </form>
        </Container>
    )
}

export default CadastroTema