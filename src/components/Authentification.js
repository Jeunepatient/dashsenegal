import AuthForm from "./Authform";
import classe from './authentification.module.css'
import logo from '../img/cmlogo.png'

const Authentification = () => {
    return ( 
        <div className={classe.loadpage}>
            
            <div className={classe.checkcontainer}>
            
                <div className={classe.cardform}>
                    <div>
                        <div className={classe.title}>Sign in</div>
                    </div>
                    <div >
                        <img src={logo} alt='' />
                    </div>
                    <div className={classe.check}>
                        
                            <AuthForm />
                        
                    
                    </div>
                </div>
                
            </div>
        </div>
        
     );
}
 
export default Authentification;