import React from "react";
import { Toolbar, AppBar, IconButton, Typography, Button } from "@material-ui/core"
import { Box } from "@mui/material";
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import useLocalStorage from "react-use-localstorage";


function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    let history = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado!")
        history('/login')
    }

    return (
        <>
            <div className="root">
                <AppBar position="static" className="appBar">
                    <Toolbar className="toolBar">
                        <IconButton edge="start" className="menuButton" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" className="title">Blog Pessoal</Typography>
                        <Box paddingX={30}>
                            <Link to='/home' className="text-decoration-none">
                                <Button className="options"><h3>Home</h3></Button>
                            </Link>
                            <Link to='/posts'>
                            <Button
                            className="options"><h3>Postagens</h3></Button>
                            </Link>
                            <Link to='/temas'>
                            <Button className="options"><h3>Temas</h3></Button>
                            </Link>
                            <Link to='/formularioTema'>
                            <Button className="options"><h3>Cadastrar Tema</h3></Button>
                            </Link>
                            
                                <Button className="text-decoration-none options" onClick={goLogout}><h3>Logout</h3></Button>
                            
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar;