import * as React from 'react';
import Button from '@mui/material/Button';
import  Dialog  from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import classe from '../table.module.css'

import { makeStyles } from '@material-ui/core';
import Countryform from './Countryform'

const useStyles = makeStyles ({
    modal : {
        width : 450
    } 
})

export default function CountryModal({ open, handleClose, data, onChange, handleSubmit }) {
    

    const classes = useStyles()

    const { id} = data
    return (
        <div >

            <Dialog
              
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {id ? 'update Country' : 'create new Country'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form >
                           
                            <Countryform data={data}  onChange={onChange}/>
                        </form>
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant='outlined'>cancel</Button>
                    <Button variant='contained' onClick={() => handleSubmit()}>
                        {id ? 'update' : '  submit'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}