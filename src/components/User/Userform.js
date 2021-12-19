import { Alert, Input, TextField } from "@mui/material";
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
import { UserContext } from "./UserContext";

const Userform = ({data, onChange}) => {
   

    
    const {datarow} = React.useContext(UserContext)
   
    const {  firstName, lastname, username, password, cma_agency_id} = data
    const onSubmit =e => {
        e.preventDefault()
        // console.log(e)
       
 
       
    }
    
    const validate = () => {
        const errors = {};
        datarow.map(user => {
            if(username === user.username){
                errors.username = 'this username already exists !'
            }
        })
       if(!username){
           errors.username = "required"
       }
        if(password.length < 5){
            errors.password = "the password is too short"
        }
        return errors
    }
  
  
    const required = value => (value ? undefined : 'Required')
    return ( 
        
            <Form 
           
            onSubmit={ onSubmit}
            subscription = {{
                submitting : true,
               
                 
            }}
            validate={validate}
           
            >
                 {({handleSubmit, submitError})=>(
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
                             {({ meta, placeholder,  onChange, })=> (
                                 <>
                                     <TextField  value={firstName} id="firstName" onChange={onChange}  margin='dense' placeholder={placeholder} label='first name' variant="outlined" fullWidth/>
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
                       
                         subscription={{
                            value : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({ meta, onChange, input, rest , name})=> (
                                 <>
                                     <TextField name={name} {...input} required value={username} {...rest} onChange={onChange} id='username'  margin='dense'   placeholder='username....' label='username' variant="outlined" fullWidth/>
                                     {(meta.error || meta.submitError) && meta.touched && <span style={{color : 'red', textAlign: 'right'}}> {meta.error || meta.submitError} </span>}
                                     
                                 </>
                             )}
                         </Field>
                         <Field 
                         name="password"
                         onChange={e => onChange(e)}
                         
                           
                             subscription={{
                               value : true,
                               error : true,
                               touched: true,
                               active: true
                           }}
                           
                         >
                           {({meta, onChange, input, rest})=> (
                               <>
                              
                                <TextField
                                required
                                type='password'
                                    id="password"
                                    name="password"
                                    label="password"
                                    value={password}
                                    onChange={onChange}
                                    margin='dense'
                                    fullWidth
                             
                               />
                                  
                                
                                {(meta.error || meta.submitError) && meta.touched && <span style={{color : 'red', textAlign: 'right'}}> {meta.error || meta.submitError} </span>}
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