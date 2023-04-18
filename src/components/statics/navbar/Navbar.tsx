import React from "react";
import { Toolbar, AppBar, IconButton, Typography, Button } from "@material-ui/core"
import { Box } from "@mui/material";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
    return (
        <>
            <div className="root">
                <AppBar position="static" className="appBar" style={{ background: "black" }}>
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" style={{ color: "#ff6197", fontWeight: "bold" }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" className="title" style={{ color: "#ff6197", fontFamily: "calibri", fontWeight: "bold" }}>
                            Blog Pessoal
                        </Typography>
                        <Box paddingX={30}>
                            <Link to='/home' className="text-decoration-none">
                                <Button className="options" style={{ color: "#ce146a", fontWeight: "bold", fontFamily: "calibri" }}><h3>Home</h3></Button>
                            </Link>
                            <Button className="options" style={{ color: "#ce146a", fontWeight: "bold", fontFamily: "calibri" }}><h3>Postagens</h3></Button>
                            <Button className="options" style={{ color: "#ce146a", fontWeight: "bold", fontFamily: "calibri" }}><h3>Temas</h3></Button>
                            <Button className="options" style={{ color: "#ce146a", fontWeight: "bold", fontFamily: "calibri" }}><h3>Cadastrar Tema</h3></Button>
                            <Link to='/login' className="text-decoration-none">
                                <Button className="options" style={{ color: "#ce146a", fontWeight: "bold", fontFamily: "calibri" }}><h3>Logout</h3></Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar;