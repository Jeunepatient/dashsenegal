import { Link } from 'react-router-dom';
import auth from './authentification.module.css'
const AuthForm = () => {
    return ( 
        <div className={auth.authent}>
            <form className={auth.form}>
                <div className={auth.champ}>
                    <div className={auth.label}>
                        <label>username</label>
                    </div>
                    <div className={auth.inputspot}>
                        <i className='fa fa-user-circle'></i>
                        <input type='text' placeholder='username' />
                   </div>
                </div>
                <div  className={auth.champ}>
                    <div className={auth.label}>
                        <label>password</label>
                    </div>
                    <div className={auth.inputspot}>
                        <i className='fa fa-lock'></i>
                        <input type='password' placeholder='password' />
                   </div>
                </div>
                <div>
                    <div> <Link to='/recovermypassword'>forget my password ?</Link> </div>
                </div>
                <div className={auth.sub}> 
                    <button className={auth.btn}>  sign in <i className='fa fa-sign-in'></i></button>
                </div>
            </form>
        </div>
     );
}
 
export default AuthForm;