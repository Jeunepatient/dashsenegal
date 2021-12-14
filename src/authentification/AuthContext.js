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
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { FORM_ERROR } from "final-form";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AuthContext = () => {
   
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values, e) => {
        await sleep(300);
        e.preventDefault()
        if (values.username !== "Ibrahima") {
            return { username: "Unknown username" };
          }
          if (values.password !== "finalformrocks") {
            return { [FORM_ERROR]: "Login Failed" };
          }
        window.alert(JSON.stringify(values, 0, 2));
    };  
  

   const validate = (values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
         else if (values.confirm !== values.password) {
          errors.confirm = "Must match";
        }
        return errors;
      }

  
    
        const [valuesp, setValues] = React.useState({
          amount: '',
          password: '',
          weight: '',
          weightRange: '',
          showPassword: false,
        });
      
        // const handleChange =
        //   (prop) => (event) => {
        //     setValues({ ...valuesp, [prop]: event.target.value });
        //   };
      
        const handleClickShowPassword = () => {
          setValues({
            ...valuesp,
            showPassword: !valuesp.showPassword,
          });
        };
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
      

    
  
    // const required = value => (value ? undefined : 'Required')
    return ( 
        
            <Form 
           
            onSubmit={ onSubmit}
            validate={validate}
            subscription = {{
                submitting : true,
               values : true,
               error : true,
                 
            }}
           
           
            >
                 {({handleSubmit, values})=>(
                     <form onSubmit={handleSubmit}  >
                         
                         <Field name='username' 
                         placeholder='enter your first name'
                        
                       
                         subscription={{
                            value : true,
                            error : true,
                            active: true,
                            touched: true
                         }}
                         >
                             {({ meta,name ,placeholder, input, rest, value})=> (
                                 <>
                                     <TextField name={name} {...input} value={value} {...rest}  margin='dense' placeholder={placeholder} label='username' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </>
                             )}
                         </Field>
                         
                         <Field name='password'>
                         {({ meta, name, input, rest, value})=> (
                             <>
                        <FormControl margin="dense" variant="outlined"  fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={valuesp.showPassword ? 'text' : 'password'}
                                name={name}
                                {...input}
                                {...rest}
                                // onChange={handleChange('password')}
                                value={value}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {value ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            </FormControl>
                             {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                             </>
                            )} 
                         </Field>
                            
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default AuthContext;