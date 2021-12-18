import { useContext } from "react";
import { Leftcontext } from "../Context/Leftcontext";
import Restopright from "./Restopright";
import Topright from "./Topright";
import Tableuser from "./User/Tableuser";

import Userformmat from "./Userformmat";
import Usersform from "./Usersform";


const User = () => {
    const {islight, dark, light} = useContext(Leftcontext)
   const theme = islight ? light : dark
    return ( 
        <div className='leftuser'  style={{backgroundColor :theme.bg, color : theme.color }}>
            <Restopright />
           
            <Tableuser />
            {/* <Usersform /> */}
          
        </div>
     );
}
 
export default User;