import React from "react";
import {Toolbar, AppBar, IconButton, Typography, Button} from "@material-ui/core"
import { Box } from "@mui/material";
import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css"
import { Padding } from "@mui/icons-material";



function Navbar() {
    return (
        <>
            <div className="root">
                <AppBar position="static" className="appBar" style={{background: "#FFE4B5"}}>
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" aria-label="menu" style={{color: "black", fontWeight:"bold"}}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="title" style={{color: "black"}}>
                           Blog Pessoal
                        </Typography>
                        <Box paddingX={30}>
                        <Button className="options" style={{ color: "#DC143C", fontWeight: "bold" }}>Home</Button>
                        <Button className="options" style={{ color: "#DC143C", fontWeight: "bold" }}>Postagens</Button>
                        <Button className="options" style={{ color: "#DC143C", fontWeight: "bold" }}>Temas</Button>
                        <Button className="options" style={{ color: "#DC143C", fontWeight: "bold" }}>Cadastrar Tema</Button>
                        <Button className="options" style={{ color: "#DC143C", fontWeight: "bold" }}>Logout</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar;