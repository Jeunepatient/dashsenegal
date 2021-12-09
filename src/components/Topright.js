import { useContext } from 'react';
import { Leftcontext } from '../Context/Leftcontext';
import Admintools from './Admintools';
import top from './Topright.module.css'
const Topright = () => {
    const {islight, light, dark} = useContext(Leftcontext)
    const theme = islight ? light : dark
    return ( 
        <div style={{backgroundColor :theme.bg, color : theme.color  }} className={top.top}>
            <div style={{backgroundColor :theme.bg, color : theme.color }} className={top.container}>
                <div  className={top.left}>
                    <div  style={{borderColor : theme.ui, backgroundColor :theme.bg}} className={top.search}>
                        <i className='fa fa-search'></i>
                        <input style={{backgroundColor : theme.bg, color : theme.color}} type='search' placeholder='search...' />
                    </div>
                </div>
               <Admintools />
            </div>
        </div>
     );
}
 
export default Topright;