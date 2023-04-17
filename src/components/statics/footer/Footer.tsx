import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css"

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{background: "#FFE4B5"}}>
                <Grid alignItems="center" item xs={12}>
                    <Box className="redesSociais">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "black" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/CatianeNascimento" target="_blank">
                                <GitHubIcon style={{ fontSize: 45, color: "black" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/catnasc/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 45, color: "black" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#FFE4B5", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black", fontWeight:"bold" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://www.google.com/intl/pt-BR/gmail/about/#inbox">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "black", fontWeight:"bold", textDecoration:"" }} align="center">csnascimento07@gmail.com</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;