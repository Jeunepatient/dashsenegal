import { useContext } from "react";
import { AuthContext } from "./authentification/AuthContext";
import Leftside from "./components/Leftside";

const Drawerside = () => {
    const {login, islogin} = useContext(AuthContext)
    const {issignedin} = islogin 
    console.log(issignedin)
    return login  && <Leftside />
}
 
export default Drawerside;