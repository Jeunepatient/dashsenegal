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
import { useHistory } from "react-router-dom";
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
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button'
import { useContext } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import { makeStyles } from '@material-ui/core';
import Login from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert'
import { AuthContext } from "./AuthContext";
// a little style
const useStyles = makeStyles({
    btn: {
        backgroundColor : '#112769',
       alignSelf : 'center',
      
       '&:hover' : {
           backgroundColor : '#24366c'
       },
       '&:focus ' : {
            borderColor : '#1976d2'
       },
    },
    action : {
        textAlign : 'center'
    }
    ,
    card : {
        boxShadow :' rgb(145, 158, 171,  24%) 0px 0px 2px 0px, rgb(145, 158, 171,  24%) 0px 16px 32px',
        borderWidth : '2.4px'
    }

})
const Authlogin = () => {
    //destructuring the user infor from the object checkadmin
    const {checkadmin, setsadmin, handleSubmitCheck, handleCheck, error, setError, erromessage} = useContext(AuthContext)
    const {username , password} = checkadmin
   
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onSubmit = async (values) => {
        await sleep(200);
       
        if (values.username !== "Ibrahima") {
            return { username: "Unknown username" };
          }
          if (values.password !== "jeune") {
            return { [FORM_ERROR]: "Login Failed" };
          }
          console.log(FORM_ERROR + ' on submit from react final form')
        // window.alert(JSON.stringify(values, 0, 2));
    }; 
   
    
   
  

   const validate = () => {
        const errors = {};
        if (!username) {
          errors.username = "Required";
        }
        if (!password) {
          errors.password = "Required";
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
           
            onSubmit={onSubmit}
            validate={validate}
            
            // subscription = {{
            //     submitting : true,
            //    values : true,
            //    error : true,
            //    active: true,
            //    touched: true,
            //    submitting : true,
            //    pristine : true
                 
            // }}
            subscription={{
                submitting : true,
                submitError : true
             }}
           
            >
                 {({handleSubmit, submitting, pristine, submitError})=>(
                     <form onSubmit={handleSubmit} >
                         
                         <Field name='username' 
                         placeholder='enter your first name'
                        
                            onChange={handleCheck}
                         subscription={{
                            value : true,
                            error : true,
                            active: true,
                            touched: true,
                            submitting : true,
                            pristine : true,
                            submitError : true,
                         }}
                         >
                             {({ meta ,name ,placeholder, input, rest, value, onChange})=> (
                                 <>
                                     <TextField name={name} id="username" {...input} value={username} onChange={onChange} {...rest}  margin='dense' placeholder={placeholder} label='username' variant="outlined" fullWidth/>
                                     {(meta.error || meta.submitError) && meta.touched && <span style={{color : 'red', textAlign: 'right'}}> {meta.error || meta.submitError} </span>}
                                     
                                {/* {(meta.error || meta.submitError) && meta.touched && (<span>{meta.error || meta.submitError}</span> )} */}
                                 </>
                             )}
                         </Field>
                         
                         <Field
                          name='password'
                          onChange={handleCheck}
                          subscription={{
                            value : true,
                            error : true,
                            
                            active: true,
                            touched: true,
                            submitting : true,
                            pristine : true
                         }}
                          >
                         {({ meta, name, input, rest, value, onChange})=> (
                             <>
                        <FormControl margin="dense" variant="outlined"  fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={valuesp.showPassword ? 'text' : 'password'}
                                name={name}
                                {...input}
                                {...rest}
                                // onChange={handleChange('password')}
                                value={password}
                                onChange={onChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {valuesp.password ? <VisibilityOff /> : <Visibility />}
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
                         <Stack direction="row" spacing={2} sx={{mt : 1.5}}>
                              <FormGroup>
                                  <FormControlLabel control={<Checkbox defaultChecked color='secondary'  />} label="remember me" />
                              </FormGroup>
                              <Typography component="a" sx={{textAlign : 'right', lineHeight : '2.6'}} color = 'secondary'>forget my password</Typography>  
                            </Stack >
                              
                              
                         <Box sx={{mt : 5}}>

                             <Button type="submit" onClick={handleSubmitCheck} variant="contained" disabled={submitting} size="large" color='secondary' endIcon={<Login />}> login</Button>
                         </Box>
                        <Box sx={{mt : 5}}>
                            {
                                error ? (<Alert severity="error" onClick={() => setError(false)}>
                                   {erromessage}
                                </Alert>) : <Alert severity="info" size="medium">well submited</Alert>
                            }

                        </Box>
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Authlogin;