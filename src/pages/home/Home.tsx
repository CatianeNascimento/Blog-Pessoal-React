import React from "react";
import { Grid, Typography, Button } from "@material-ui/core"
import { Box } from "@mui/material";
import './Home.css';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPost from "../../components/postagens/modalPost/ModalPost";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item alignItems="center" xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom component="h3" align="center" className='title'>Seja Bem-Vindes!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className='subtitle'>Aqui você é livre para criar!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPost/>
                        </Box>
                        <Button variant="outlined" className='button'>Ver postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src\assets\img\img-home.png" alt="Imagem Home"/>
                </Grid>
                <Grid xs={12}  className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;