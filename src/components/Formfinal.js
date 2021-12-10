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
                         
                         <Field name='first' 
                         placeholder='enter your first name'
                         value={firstName} onChange={e => onChange(e)}
                         validate={required}
                         subscription={{
                            value : true,
                            active : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({input, meta, placeholder})=> (
                                 <div>
                                     <TextField  {...input} id="name"  margin='dense' placeholder={placeholder} label='first name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red', textAlign: 'right'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                         <Field name='last name'
                         value={lastname} 
                         onChange={e => onChange(e)}
                         validate={required}
                          subscription={{
                            value : true,
                            active : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({input, meta})=> (
                                 <div>
                                     <TextField  {...input} id="last name"   margin='dense' placeholder='last name' label='last name' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                         <Field name='email'
                         value={email} 
                         onChange={e => onChange(e)}
                         validate={required}
                         subscription={{
                            value : true,
                            active : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({input, meta})=> (
                                 <div>
                                     <TextField  {...input} id="email"  margin='dense'   placeholder='email....' label='email' variant="outlined" fullWidth/>
                                     {meta.touched && meta.error && <span style={{color : 'red'}}> {meta.error} </span>}
                                 </div>
                             )}
                         </Field>
                        
                         <Field  name='phone'
                         value={phone} 
                         onChange={e => onChange(e)}
                         validate={required}
                          subscription={{
                            value : true,
                            active : true,
                            error : true,
                            touched: true
                        }}
                         >
                             {({input, meta})=> (
                                 <div>
                                     <TextField  {...input} id="phone"   margin='dense' placeholder='phone +1...' label='phone' variant="outlined" fullWidth/>
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