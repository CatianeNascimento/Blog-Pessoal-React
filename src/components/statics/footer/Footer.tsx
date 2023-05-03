import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css"
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Footer() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token !== '') {
        footerComponent =
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12}>
                    <Box className="redesSociais">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='title'>Siga-me nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="mailto:csnascimento07@gmail.com" target="_blank">
                                <EmailIcon className='icon' /></a>
                            <a href="https://www.linkedin.com/in/catnasc/" target="_blank">
                                <LinkedInIcon className='icon' /></a>
                            <a href="https://github.com/CatianeNascimento" target="_blank">
                                <GitHubIcon className='icon2' /></a>
                        </Box>
                    </Box>
                    <Box className='caixa2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='title2'><h2>© 2023 Copyright</h2></Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }


    return (
        <>
            {footerComponent}
        </>
    );
}

export default Footer;