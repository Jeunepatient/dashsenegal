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
   

    
     //zone_country
     const zone_country = [
         {
             id: 1,
             name : "west",
             trade : "cars"
         },
         {
            id: 2,
            name : "east",
            trade : "merchandise"
        },
        {
            id: 3,
            name : "south",
            trade : "Tv screen"
        },
        {
            id: 4,
            name : "north",
            trade : "laptop"
        }
     ] 

   
    const {  name,  code, zone_id} = data
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
                         placeholder='name of the country'
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
                                     <TextField value={name} id="name" onChange={onChange}  margin='dense' placeholder={placeholder} label='name of the country' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                        
                         <Field name='code'
                         
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
                                     <TextField   value={code} onChange={onChange} id='code'  margin='dense'   placeholder='code of the zone....' label='code' variant="outlined" fullWidth />
                                     
                                     
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                         <Field name='zone_id'
                        
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
                                    <TextField  select value={zone_id}  name="zone_id"  onChange={onChange}   margin='dense' placeholder='zone_id' label='zone' variant="outlined" fullWidth>
                                    {zone_country.map((option) => (
                                       <MenuItem  key={option.id} value={option.name}>
                                           {option.name}
                                       </MenuItem>
                                   ))}
                                    </TextField>
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