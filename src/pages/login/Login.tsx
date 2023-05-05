import React, { ChangeEvent, useState, useEffect} from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../services/Services";
import UserLogin from "../../models/UserLogin";
import './Login.css';
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/Actions";
import { toast } from "react-toastify";

function Login() {

    let history = useNavigate();

    const dispatch = useDispatch();

    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(token != '')
        dispatch(addToken(token))
        history('/login')
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado com Sucesso!', {
                position: 'top-right', 
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, 
                theme: 'colored', 
                progress: undefined,
            });
            
           history('/home')

        } catch(error) {
            toast.error('Dados Inconsistentes! Erro ao logar!', {
                position: 'top-right', 
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false, 
                theme: 'colored', 
                progress: undefined,
            });
        }
    }


    return (
        <Grid container direction='row' justifyContent="center" alignItems="center" className="caixa">
            <Grid xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h4" gutterBottom component="h4" align="center" className="title">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' margin-top={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align="center" className='title2'>Não tem uma Conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align="center" className='title3'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="img-login">
            </Grid>
        </Grid>
    );
}

export default Login;