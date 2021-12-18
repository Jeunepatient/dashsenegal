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
import { TownContext } from "../Town/TownContext";

const Harborform = ({data, onChange}) => {
   
    const {datatown} = React.useContext(TownContext)
    const countries = [
        {
          value: 'GUI',
          label: 'Guinea Conakry',
        },
        {
          value: 'SEN',
          label: 'senegal Dakar',
        },
        {
          value: 'GHA',
          label: 'Ghana Accra',
        },
        {
          value: 'TOG',
          label: 'Togo Lomé',
        },
      ];

      const geopoints = [
        {
            id: 1,
            name : 'Accra',
            lon : '12.578965',
            lat : '-58.98675'
        },
        {
            id: 2,
            name : 'Dakar',
            lon : '15.578965',
            lat : '-38.98675'
        },
        {
            id: 3,
            name : 'Lome',
            lon : '13.578965',
            lat : '-28.98675'
        },
        {
            id: 4,
            name : 'conakry',
            lon : '11.578965',
            lat : '-36.98675'
        },
      ]

   
    const {  name, geopoint_id, code, ville_id} = data
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
                         <Field name='geopoint_id'
                        
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
                                     <TextField   select  value={geopoint_id}  name="geopoint_id" id="geopoint_id" onChange={onChange}   margin='dense' placeholder='geopoint_id' label='geopoint' variant="outlined" fullWidth>
                                     {geopoints.map((option) => (
                                        <MenuItem  key={option.id} value={option.name}>
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
                                     <TextField   value={code} onChange={onChange} id='code'  margin='dense'   placeholder='code....' label='username' variant="outlined" fullWidth />
                                     
                                     
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                       
                         <Field 
                         name="ville_id"
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
                                    id="ville_id"
                                    name="ville_id"
                                    label="ville"
                                    value={ville_id}
                                    onChange={onChange}
                                    margin='dense'
                                    fullWidth
                                    
                                >
                                    {datatown.map((option) => (
                                        <MenuItem  key={option.id} value={option.country_id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </>
                           )}  
                         </Field>
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Harborform;