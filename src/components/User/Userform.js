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

const Userform = ({data, onChange}) => {
   

    

   
    const {  firstName, lastname, username, password, cma_agency_id} = data
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
                         
                         <Field name='firstname' 
                         placeholder='enter your first name'
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
                                     <TextField value={firstName} id="firstName" onChange={onChange}  margin='dense' placeholder={placeholder} label='first name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                         <Field name='lastname'
                        
                         onChange={e => onChange(e)}
                         validate={required}
                          subscription={{
                            value : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({ meta, onChange})=> (
                                 <>
                                     <TextField   value={lastname}   id="lastname" onChange={onChange}   margin='dense' placeholder='last name' label='last name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                         <Field name='username'
                         
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
                                     <TextField   value={username} onChange={onChange} id='username'  margin='dense'   placeholder='username....' label='username' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                         <Field 
                         name="password"
                         onChange={e => onChange(e)}
                         
                            validate={required}
                             subscription={{
                               value : true,
                               error : true,
                               touched: true,
                               active: true
                           }}
                           type="select"
                         >
                           {({meta, onChange})=> (
                               <>
                              
                                <TextField
                                type='password'
                                    id="password"
                                    name="password"
                                    label="password"
                                    value={password}
                                    onChange={onChange}
                                    margin='dense'
                                    fullWidth
                                    
                                >
                                  
                                </TextField>
                            </>
                           )}  
                         </Field>
                        
                         <Field  name='cma_agency_id'
                       
                         onChange={e => onChange(e)}
                         validate={required}
                          subscription={{
                            value : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({ meta, onChange})=> (
                                 <>
                                     <TextField   value={cma_agency_id} id='cma_agency_id' onChange={onChange}   margin='dense' placeholder='id...' label='cma_agency_id' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                    
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Userform;