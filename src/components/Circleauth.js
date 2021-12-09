import AuthForm from "./Authform";
import circle from './authentification.module.css'
import logo from '../img/cmlogo.png'
import avatar from '../img/avatar.svg'
import Reactfinalform from "./Reactfinalform";
import Alcantaform from "./Alcantaform";
const Circleauth = () => {
    return ( 
        <div className={circle.parent}>
            <div className={circle.left}>
                <div className={circle.circle}></div>
                <img src={logo} alt='' />
            </div>
            <div className={circle.right}>
                <div style={{ fontSize : '50px', color : '#00026e'}} className={circle.title}>sign in</div>
                {/* <div>
                    <img src={avatar} alt='' />
                </div> */}
                {/* <AuthForm /> */}
                {/* <Reactfinalform /> */}
                <Alcantaform />
            </div>
        </div>
     );
}
 
export default Circleauth;