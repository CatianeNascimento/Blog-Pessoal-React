import React from "react";
import './Login.css';
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";

function Login() {

    return (
        <Grid container direction='row' justifyContent="center" alignItems="center" className="caixa">
            <Grid xs={6} alignItems="center">
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h4" gutterBottom component="h4" align="center" className="title">Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decoration-none'>
                                <Button type='submit' variant='contained'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' margin-top={2}>
                        <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align="center" className='title2'>Não tem uma Conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align="center" className='title3'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundColor: "#fed4f6",
                backgroundImage: 'url(src/assets/img/img-login.png)',
                backgroundRepeat: 'no-repeat', width:'100vh',  minHeight: '90vh', backgroundSize: "400px 566px", backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    );
}

export default Login;