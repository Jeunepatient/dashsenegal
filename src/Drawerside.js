import { useContext } from "react";
import { AuthContext } from "./authentification/AuthContext";
import Leftside from "./components/Leftside";

const Drawerside = () => {
    const {login} = useContext(AuthContext)
    return login && <Leftside />
}
 
export default Drawerside;