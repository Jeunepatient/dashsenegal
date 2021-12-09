import {Form ,Field, FormSpy } from "react-final-form";
// import createDecorator from 'final-form-focus'
import classe from './authentification.module.css'

const Alcantaform = () => {
    const onSubmit =e => {
        e.preventDefault()
        e.username=""
        e.password=''
    }
    // const validate= e => {
    //    const errors = {}
    //    if( e.username !== 'Ibrahima')
    //    {
    //        errors.username = 'invalid'
    //    }
    //    if(e.password !== 'Ibrahima28'){
    //        errors.password = 'password invalid'
    //    }
    //    if(e.email !== 'di84454@gmail.com'){
    //        errors.email=' invalid'
    //    }
    //    return errors;
       
    // }
   
    const required = value => (value ? undefined : 'Required')
    return ( 
        <div>
            <Form 
            onSubmit={onSubmit} 
            // decorators ={[focusonError]}
            subscription={{
               submitting : true
            }}>
                {({handleSubmit, submitting, values})=> (
                    <form onSubmit={handleSubmit}>
                        <div>
                           
                            <label>username</label>
                            <Field name='username'
                            validate={required}
                            subscription={{
                                value : true,
                                active : true,
                                error : true,
                                touched: true
                            }}
                             render={({input, meta})=> (
                                <div className={classe.inputspot}>
                                    <i className='fa fa-user-circle'></i>
                                    <input type='text' {...input} placeholder='username' />
                                    {meta.touched && meta.error && <span style={{color : 'red'}}>{meta.error}</span>}
                                </div>
                            )} />
                                {/* {fieldState => (<pre>{JSON.stringify(fieldState, undefined, 2)}</pre>)} */}
                            
                        </div>
                        <div>
                            <label>Password</label>
                            <div>
                                
                                <Field name='password' subscription={{
                                value : true,
                                active : true,
                                error : true,
                                touched: true
                            }} 
                            validate={required}>
                                    {({input, meta})=> (
                                        <div className={classe.inputspot}>
                                            <i className='fa fa-lock'></i>
                                            <input type='password' {...input} placeholder='password' />
                                            {meta.touched && meta.error && <span style={{color : 'red'}}>{meta.error}</span> }
                                        </div>
                                       
                                      
                                    )}
                                </Field>
                            </div>
                        </div>
                        <div>
                            <label>comment</label>
                            <Field name='comment' 
                            validate={required}
                            subscription={{
                                value : true,
                                active : true,
                                error : true,
                                touched: true
                            }}
                            >
                                {({textarea, meta})=> (
                                    <div>
                                        <textarea {...textarea} />
                                        {meta.touched && meta.error && <span style={{color : 'red'}}>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div>
                            <label>email</label>
                            <Field name='email' 
                            validate={required} 
                            placeholder='m@...' 
                            subscription={{
                                value : true,
                                active : true,
                                error : true,
                                touched: true
                            }}
                            render={({input, meta, placeholder})=> (
                                <div className={classe.inputspot}>
                                    <i className='fa fa-envelope'></i>
                                    <input type='email' {...input} placeholder={placeholder}  />
                                    {meta.touched && meta.error && <span style={{color : 'red'}}>{meta.error}</span>}
                                </div>
                            )}
                            />
                        </div>
                        <div className={classe.sub}> 
                            <button className={classe.btn} disabled={submitting}>  sign in <i className='fa fa-sign-in'></i></button>
                        </div>
                        <FormSpy subscription={{values : true}}>{({values})=> (
                            <pre>{JSON.stringify(values, undefined , 2)}</pre>
                        )}

                        </FormSpy>
                        
                    </form>
                )}
            </Form>
        </div>
     );
}
 
export default Alcantaform;