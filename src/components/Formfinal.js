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

const Formfinal = ({data, onChange, Country, handleselect}) => {
    const countries = [
        {
          value: 'GUI',
          label: 'Guinea',
        },
        {
          value: 'SEN',
          label: 'senegal',
        },
        {
          value: 'GHA',
          label: 'Ghana',
        },
        {
          value: 'TOG',
          label: 'Togo',
        },
      ];

      const [currency, setCurrency] = React.useState('Guinea');

    const handleChange = (event) => {
    setCurrency(event.target.value);
  };
    const {  firstName, lastname, email, phone, country} = data
    const onSubmit =e => {
        e.preventDefault()
        // console.log(e)
       
 
       
    }
    // const [Country, setCountry] = useState('Guinea')
    // const handleselect = e => {
    //     setCountry(e.target.value)
       
    // }
  
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
                         <Field name='email'
                         
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
                                     <TextField   value={email} onChange={onChange} id='email'  margin='dense'   placeholder='email....' label='email' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                         <Field 
                         name="country"
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
                                     select
                                    id="country"
                                    name="country"
                                    label="country"
                                    value={country}
                                    onChange={onChange}
                                    margin='dense'
                                    fullWidth
                                    
                                >
                                    {countries.map((option) => (
                                        <MenuItem  key={option.value} value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </>
                           )}  
                         </Field>
                        
                         <Field  name='phone'
                       
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
                                     <TextField   value={phone} id='phone' onChange={onChange}   margin='dense' placeholder='phone +1...' label='phone' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                    
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Formfinal;