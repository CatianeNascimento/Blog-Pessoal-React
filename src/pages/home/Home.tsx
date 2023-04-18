import React from "react";
import { Grid, Typography, Button } from "@material-ui/core"
import { Box } from "@mui/material";
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "black" }} >
                <Grid item alignItems="center" xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#ce146a", fontWeight: "bold", fontFamily: "candara" }}>Seja Bem-Vindes!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#ff6197", fontWeight: "bold", fontFamily: "candara" }}>Aqui você é livre para criar!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderWidth:"3px" ,borderColor: "#ff6197", backgroundColor: "black", color: "#ff6197", fontWeight: "bold", fontFamily: "candara" }}>Ver postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src\assets\img\img-home.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

        </>
    );
}

export default Home;