import { Link } from 'react-router-dom';
import leftside from './left.module.css'
import arrow from './arrow.module.css'
import Subset from './Subset';
import { useContext } from 'react';
import { Leftcontext } from '../Context/Leftcontext';
import { AuthContext } from '../Context/AuthContext';
import logo from '../img/cmlogo.png'
import Avataruser from './Avataruser';
import { Box } from '@mui/material';



const Leftside = () => {
    
    const {showsubparm, outputsubparm, islight, light, dark, link, setlink} = useContext(Leftcontext)
    const {auth} = useContext(AuthContext)
    const theme = islight ? light : dark
    /*****add on property actif*/
    const setactif = id => {
        setlink(link.map(link => link.id == id ? {...link, actif : true} : {...link, actif : false}))
    }
    return ( 
        <div style={{backgroundColor :theme.bg, color : theme.color , borderColor : theme.ui}} className={leftside.leftside}>
            <div  style={{backgroundColor :theme.bg, color : theme.color }} className={leftside.container}>
                <Box sx={{textAlign: 'center'}}>
                     <img src={logo} alt='' />
                </Box>
               
                {/* <div style={{fontFamily: 'magmawave caps'}} className={leftside.logomakeup}>
                    cma cgm
                </div> */}
                {/**the status information */}
               <div className={leftside.top}>
                <div  style={{backgroundColor :theme.ui, color : theme.color }} className={leftside.logocon}>
                        <div className={leftside.user}>
                            {/* <i className='fa fa-user-circle'></i> */}
                            {/* <div className={leftside.img}></div> */}
                            <Avataruser />
                        </div>
                        
                            {auth.map(admeach => {
                                return(
                                    <div className={leftside.personel}>
                                         <div style={{fontFamily:'Questrial', fontSize:'20px', fontWeight : '500'}}>{admeach.firstname}</div>
                                         <div style={{color : '#ababab'}}>{admeach.status}</div>
                                    </div>
                                )
                            })}
                           
                        </div>
                 
               </div>
                <ul style={{backgroundColor :theme.bg, color : theme.color }} className={leftside.nav}>
                    {
                        link.map(link => {
                            return (
                                <Link  style={{backgroundColor :theme.bg, color : theme.color }}  key={link.id}  to={link.id !==5 && `/${link.href}`} > 
                                
                                {link.id == 5 ? <li   onClick={() =>{ setactif(link.id); outputsubparm()}}  className={link.actif  && leftside.actif } > <i className={link.font}></i> {link.hash}<i className={arrow.arrowbottom}></i> </li> : <li   onClick={() => setactif(link.id)}  className={link.actif  && leftside.actif }  > <i className={link.font}></i> {link.hash}<i className={arrow.arrowleft}></i> </li> }
                                 </Link>
                            )
                        })
                    }
               
                </ul>

                {showsubparm && <Subset  />}
                
               
            </div>
        </div>
     );
}
 
export default Leftside;