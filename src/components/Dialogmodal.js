import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import classe from './table.module.css'
import Formfinal from './Formfinal';

export default function Dialogmodal({ open, handleClose, data, onChange, handleSubmit }) {

    const { id, firstName, lastname, email, phone} = data
    return (
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {id ? 'update user' : 'create new user'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form >
                            <TextField id='firstName' value={firstName} onChange={e => onChange(e)} margin='dense' placeholder='enter your first name' label='first name' variant="outlined" fullWidth />
                            <TextField id='lastname' value={lastname} onChange={e => onChange(e)} margin='dense' placeholder='enter your last name...' label='last name' fullWidth />
                            <TextField id='email' value={email} onChange={e => onChange(e)} margin='dense' placeholder='enter email...' label='email' fullWidth />
                            <TextField id='phone' value={phone} onChange={e => onChange(e)} margin='dense' placeholder='enter phone' label='phone' fullWidth />
                            {/* <Formfinal data={data} onChange={onChange}/> */}
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