import { createContext, useContext, useReducer } from "react";

import { useState } from "react";
import { useHistory } from "react-router-dom/";
import { UserContext } from "../components/User/UserContext";
import { AuthReducer } from "./AuthReducer";


export const AuthContext = createContext()
const AuthContextLoginProvider = (props) => {
    //getting user an identifying the right user
    const {datarow,userStatus, setData} = useContext(UserContext)
   
    //handlevalidation to the next 
    const admin = { username: 'Ibrahima', password: 'Ibrahima28' }
    const initialcheckvalue = { username: '', password: '' }
    const [checkadmin, setsadmin] = useState(initialcheckvalue)
    // onchange check out the data input by the user 
    const { username, password } = checkadmin
    const handleCheck = e => {
        const { id, value } = e.target
        setsadmin({ ...checkadmin, [id]: value })
        setError(false)

    }
    const totheHomepage = useHistory()
    const [login, dispatch] = useReducer(AuthReducer,false)
    //handle error
    const [error, setError] = useState(false)
    const [erromessage, seterrormessage] = useState("")
    const handleSubmitCheck = e => {
       

      datarow.map(user => {
        if (username !== user.username) {
            seterrormessage("username is incorrect")
            setError(true)
        }
        else if (password !== user.password) {
            seterrormessage("password is incorrect")
            setError(true)
        }
        else {
            setsadmin(initialcheckvalue)
            dispatch({type : 'SIGN_IN'})
           
            setError(false)
            
            totheHomepage.push('/home')
            setData(datarow.map(user=> user.username == username && user.password === password ? {...user, isloggedin : true} : {...user, isloggedin : false}))
           
           
        }

        if (username !== user.username && password !== user.password) {
            seterrormessage("both username and password are inccorrect")
            setError(true)
        }
       })
       
      

        e.preventDefault()
        // setsadmin(initialcheckvalue)
    }
    console.log(userStatus)
    return (
        <AuthContext.Provider value={{ checkadmin, setsadmin, handleSubmitCheck, handleCheck, error, setError, erromessage,login , dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextLoginProvider;