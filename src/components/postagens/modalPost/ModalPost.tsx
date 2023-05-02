import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import {Box, Modal} from '@mui/material'
import CloseIcon from '@material-ui/icons/Close'
import CadastroPost from '../cadastroPost/CadastroPost';
import './ModalPost.css';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top:`${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };

}

const useStyle = makeStyles((theme: Theme) =>
createStyles ({
    paper: {
        position: 'absolute', 
        width: 400,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '25px',
        boxShadow: theme.shadows[5], 
        padding: theme.spacing(2, 4,3),
    },
}), 
);


function ModalPost() {
    const classes = useStyle();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <Box display="flex" justifyContent="flex-end" className="cursor">
            <CloseIcon onClick={handleClose}/>
          
          </Box>
          
          <CadastroPost/>
          
        </div>
      );

return ( 
    <div>
    <Button variant= 'outlined' className='btnModel' onClick={handleOpen}>Nova Postagem</Button>
    <Modal 
    open={open}
    onClose={handleClose}
    aria-labelledby='simple-model-title'
    aria-describedby='simple-modal-description'>
        {body}
    </Modal>
    </div>
)

}

export default ModalPost


