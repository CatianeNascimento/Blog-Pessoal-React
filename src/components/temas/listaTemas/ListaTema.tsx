import React from 'react'
import './ListaTema.css'
import { Box } from '@mui/material';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ListaTema() {

    return (
        <>
            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <Typography gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant="h5" component="h2">Minha descrição</Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Link to='' className='text-decorator-none'>
                                <Box>
                                    <Button variant='contained' className="marginLeft" size='small'>Atualizar</Button>
                                </Box>
                            </Link>
                            <Link to='' className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant='contained' size='small'>
                                        deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}

export default ListaTema;