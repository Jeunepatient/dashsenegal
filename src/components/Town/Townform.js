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
import { CountryContext } from "../Country/CountryContext";

const Twonform = ({data, onChange}) => {
   
    const {dataCountry} = React.useContext(CountryContext)
    const countries = [
        {
          id: 'GUI',
          name: 'Guinea ',
          code : 'Gui012',
          zone_id : 'zon12'
        },
        {
          id: 'SEN',
          name: 'Senegal ',
          code : 'Gui012',
          zone_id : 'zon12'
        },
        {
         id: 'GHA',
          name: 'GNANA ',
          code : 'Gha012',
          zone_id : 'zon122'
        },
        {
          id: 'TOG',
          name: 'TOGO',
          code : 'Togo035',
          zone_id : 'zneogo24'
        },
        {
            id: 'COT',
            name: 'Ivorian cost',
            code : 'Togo035',
            zone_id : 'zneogo24'
          },
      ];

      

   
    const {  name, country_id, code} = data
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
                                     <TextField value={name} id="name" onChange={onChange}  margin='dense' placeholder={placeholder} label='name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                         <Field name='country_id'
                        
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
                                     <TextField  select value={country_id}  name="country_id" id="country_id" onChange={onChange}   margin='dense' placeholder='geopoint_id' label='country' variant="outlined" fullWidth>
                                     {dataCountry.map((option) => (
                                        <MenuItem  key={option.id} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                     </TextField>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
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
                                     <TextField   value={code} onChange={onChange} id='code'  margin='dense'   placeholder='code....' label='code' variant="outlined" fullWidth />
                                     
                                     
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                       
                        
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Twonform;