import React from 'react'
import { Box } from '@mui/material'
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core'
import './DeletePost.css'


function DeletePost() {

    return (
        <>
        <Box m={2}>
            <Card variant='outlined'>
                <CardContent>
                    <Box justifyContent='center'>
                        <Typography gutterBottom>Deseja Deletar a Postagem: </Typography>
                        <Typography>Tema</Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display='flex' justifyContent='start' ml={1.0} mb={2}>
                        <Box mx={2}>
                            <Button variant='contained' className='button' size='large'>Sim</Button>
                        </Box>
                        <Box>
                        <Button variant='contained' className='button' size='large'>Não</Button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Box>
        </>
    )
}

export default DeletePost