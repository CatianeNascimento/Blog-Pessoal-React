import React from 'react'
import './CadastroPost.css'
import { Button, Container, FormControl, TextField, InputLabel, Select, FormHelperText, Typography} from '@material-ui/core';


function CadastroPost() {

    return (
        <Container maxWidth='sm' className='topo'>
            <form>
                <Typography variant='h3' component='h1' align='center'>Formulário de cadastro de postagem</Typography>
                <TextField value='' id='titulo' label='titulo' variant='outlined' name='titulo' margin='normal' fullWidth></TextField>
                <TextField value='' id='texto' label='texto' name='texto' variant='outlined' margin='normal' fullWidth></TextField>

                <FormControl>
                    <InputLabel id='demo-simple-select-helper-label'>Tema</InputLabel>
                    <Select labelId='demo-simple-select-helper-label' id='demo-simple-select-helper'>
                    </Select>
                    <FormHelperText>Escolha um tempa para a Postagem</FormHelperText>
                    <Button type='submit' variant='contained'>Finalizar</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default CadastroPost