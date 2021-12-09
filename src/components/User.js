import { useContext } from "react";
import { Leftcontext } from "../Context/Leftcontext";
import Topright from "./Topright";
import Usersform from "./Usersform";


const User = () => {
    const {islight, dark, light} = useContext(Leftcontext)
const theme = islight ? light : dark
    return ( 
        <div className='leftuser'  style={{backgroundColor :theme.bg, color : theme.color }}>
            <Topright />
           

            <Usersform />
        </div>
     );
}
 
export default User;