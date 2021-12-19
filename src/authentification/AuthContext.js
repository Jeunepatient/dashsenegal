import { createContext, useContext, useEffect, useReducer } from "react";

import { useState } from "react";
import { useHistory } from "react-router-dom/";
import { UserContext } from "../components/User/UserContext";
import { AuthReducer } from "./AuthReducer";


export const AuthContext = createContext()
const AuthContextLoginProvider = (props) => {
    //getting user an identifying the right user
    const {datarow,userStatus, setData, getDatarow} = useContext(UserContext)
    const url = `http://localhost:4000/user`
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


    // const [login, setlogin] = useState({})
    const urlsign = ` http://localhost:4000/signin`
    
    // const {issignedin} = login
   
    
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
           const Signin = {issignedin : true}
           
           fetch(urlsign, {
            method: "PUT", body: JSON.stringify(Signin), headers: {
                'content-type': 'application/json'
            }
             })
            .then(res => res.json())
            .then(data => {
                getsignin()
               console.log(data)
            })
           
            setError(false)
            
            totheHomepage.push('/home')
            // setData(datarow.map(user=> user.username == username && user.password === password ? {...user, isloggedin : true} : {...user, isloggedin : false}))
            const newdata = user.username == username && user.password === password ? {...user, isloggedin : true} : {...user, isloggedin : false}
             fetch(url + `/${user.id}`, {
                method: "PUT", body: JSON.stringify(newdata), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                   
                    getDatarow()

                })
           
        }

        if (username !== user.username && password !== user.password) {
            seterrormessage("both username and password are inccorrect")
            setError(true)
        }
       })
       
      

        e.preventDefault()
        // setsadmin(initialcheckvalue)
    }


    const [islogin, setLogin] = useState({})
    const [load, setload] = useState(true)
    const [Errorfetch, setErrorfetch] = useState(null)
    useEffect(()=>{
        getsignin()
    }, [])


 
      



    const getsignin= () => {
        fetch(urlsign)
            .then(res =>{
                return res.json()
                })
            .then(data => {
               setLogin(data)
               console.log(data)
               setload(false)
            })
            .catch(err => {
                setErrorfetch(err.message)
            })
    }


    return (
        <AuthContext.Provider value={{ checkadmin, setsadmin, handleSubmitCheck, handleCheck, error, setError, erromessage,  login ,dispatch, islogin, urlsign ,getsignin}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextLoginProvider;