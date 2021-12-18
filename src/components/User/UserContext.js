import { createContext ,  useEffect, useState} from "react";
import React from 'react'

export const UserContext = createContext()
const UserContextProvider = (props) => {
// Delete user
    const handleDelete = (id) => {
        const confirm = window.confirm("are you sure, you wanna delete this row ?? ")
        if (confirm) {
            fetch(url + `/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => getDatarow())
        }


    }

    //bring some edit to one row 
    const handleUpdate = (oldData) => {
        setUser(oldData)
        handleClickOpen()
    }

    //initialize the value
  
   
    const initialvalues = { firstName: "",  lastname: '', username: "", password :"", cma_agency_id : "", isloggedin: false }
    // const [country, setCurrency] = React.useState('EUR');
    
    // add use data and hook it up
    const [userStatus, setUser] = useState(initialvalues)
    //make some tweaks about...
    const onChange = e => {
     
     
        const { value, id, name } = e.target
       
        setUser({ ...userStatus, [id]: value, [name]: value, isloggedin : false})
        // console.log(name, value)
        // console.log(name)
    }

    const handleClose = () => {
        setOpen(false);
        setUser(initialvalues)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        if (userStatus.id) {
            const confirm = window.confirm("are you sure , you wanna update this data")

            confirm && fetch(url + `/${userStatus.id}`, {
                method: "PUT", body: JSON.stringify(userStatus), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    handleClose()
                    getDatarow()

                })
        } else {
            fetch(url, {
                method: "POST", body: JSON.stringify(userStatus), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    handleClose()
                    getDatarow()

                })
        }

    }
    const [datarow, setData] = useState([])
    const [pending, setload] = useState(true)
    useEffect(() => {
        getDatarow()
    }, [])
    const url = `http://localhost:4000/user`

    const getDatarow = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setload(false)
                setData(data)
            })
    }


    return ( 
        <UserContext.Provider value={{datarow, setData, handleSubmit,userStatus, setUser, onChange, handleUpdate, handleDelete, initialvalues, open, setOpen ,handleClose, handleClickOpen}}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;