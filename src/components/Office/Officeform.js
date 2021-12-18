import { Input, TextField } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import {
    IconFlagTR,
    IconFlagDE,
    IconFlagUS
} from 'material-ui-flags';
import MenuItem from '@mui/material/MenuItem';
import {Form ,Field, FormSpy } from "react-final-form";
import IconButton from '@material-ui/core/IconButton';

const Officeform = ({data, onChange}) => {
   

    
      

   
    const {  name,  number} = data
    const onSubmit =e => {
        e.preventDefault()
        // console.log(e)
       
 
       
    }
  
  
    const required = value => (value ? undefined : 'Required')
    return ( 
        
            <Form 
           
            onSubmit={ onSubmit}
            subscription = {{
                submitting : true,
               
                 
            }}
           
           
            >
                 {({handleSubmit})=>(
                     <form onSubmit={handleSubmit}  >
                         
                         <Field name='name' 
                         placeholder='enter the name of the harbor'
                          onChange={e => onChange(e)}
                         validate={required}
                         subscription={{
                            value : true,
                            error : true,
                            active: true,
                            touched: true
                         }}
                         >
                             {({ meta, placeholder,  onChange})=> (
                                 <>
                                     <TextField value={name} id="name" onChange={onChange}  margin='dense' placeholder={placeholder} label='name of the office' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                        
                         <Field name='size'
                         
                         onChange={e => onChange(e)}
                         validate={required}
                         subscription={{
                            value : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({ meta, onChange })=> (
                                 <>
                                     <TextField   value={number} onChange={onChange} id='number'  margin='dense'   placeholder='size of the office....' label='size' variant="outlined" fullWidth />
                                     
                                     
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                       
                        
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Officeform;