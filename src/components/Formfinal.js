import { TextField } from "@mui/material";
import {Form ,Field, FormSpy } from "react-final-form";
const Formfinal = ({data, onChange}) => {
    const {  firstName, lastname, email, phone} = data
    const onSubmit =e => {
        e.preventDefault()
        console.log(e)
       
    }
    const required = value => (value ? undefined : 'Required')
    return ( 
        
            <Form 
            onSubmit={ onSubmit}
            subscription = {{
                submitting : true
            }}
           
            >
                 {({handleSubmit})=>(
                     <form onSubmit={handleSubmit}>
                         
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
                                 <div>
                                     <TextField value={firstName} id="firstName" onChange={onChange}  margin='dense' placeholder={placeholder} label='first name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </div>
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
                                 <div>
                                     <TextField   value={lastname}   id="lastname" onChange={onChange}   margin='dense' placeholder='last name' label='last name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
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
                                 <div>
                                     <TextField   value={email} onChange={onChange} id='email'  margin='dense'   placeholder='email....' label='email' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
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
                                 <div>
                                     <TextField   value={phone} id='phone' onChange={onChange}   margin='dense' placeholder='phone +1...' label='phone' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                    
                     
                     </form>
                     
                )}

            </Form>

   
     )
}
 
export default Formfinal;