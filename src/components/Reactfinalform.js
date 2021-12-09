import {Form, Field} from 'react-final-form'
// import TextField from '@material-ui/core/TextField'
const Reactfinalform = () => {
    const onSubmit =(e) => {
       debugger
    }
    const validate = (e)=>{
    const errors ={}
     if(e.bio && e.bio.length < 5){
         errors.bio = 'too short'
     }
     return errors
    } 
    return ( 
        <div>
            <div> log in to the dashbord system welcome</div>
           <Form 
           onSubmit={onSubmit} 
           validate={validate} 
           render={({hanldesubmit})=> (
               <form onSubmit={hanldesubmit}>
                   <div>
                       
                       <label>username</label>
                       <Field name='username' component='input' placeholder="firstname" />
                   </div>
                   <div>
                       <Field 
                       name='bio'
                       render={({input, meta}) => (
                           <div>
                               <label>Bio</label>
                               <textarea {...input} />
                               {meta.touched && meta.error && <div style={{color : 'red'}}>{meta.error}</div>}
                           </div>
                       )}
                       />
                   </div>
                   <div>
                       <Field name='phone' >
                           {({input, meta})=> (
                               <div>
                                   <label>Phone</label>
                                   <input type="text" {...input} placeholder='phone...' />
                                   {meta.touched && meta.error && <div style={{color : 'red'}}>{meta.error}</div>}
                               </div>
                           )}
                       </Field>
                   </div>
                   <button type="submit">Submit</button>
               </form>
           )
        }/>
               
           
        </div>
     );
}
 
export default Reactfinalform;