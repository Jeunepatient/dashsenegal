import { createContext } from "react";
import React , { useState, useEffect } from "react";
export const HarborContext = createContext()
const HarborContextProvider = (props) => {
   
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
            setHarbor(oldData)
            handleClickOpen()
        }

        //initialize the value


        const initialvalues = { name: "", geopoint_id: '', code: "",  ville_id: ""}
        // const [country, setCurrency] = React.useState('EUR');

        // add use data and hook it up
        const [Harbor, setHarbor] = useState(initialvalues)
        //make some tweaks about...
        const onChange = e => {


            const { value, id, name } = e.target

            setHarbor({ ...Harbor, [id]: value, [name]: value, isloggedin: false })
            // console.log(name, value)
            // console.log(name)
        }

        const handleClose = () => {
            setOpen(false);
            setHarbor(initialvalues)
        };

        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleSubmit = () => {
            if (Harbor.id) {
                const confirm = window.confirm("are you sure , you wanna update this data")

                confirm && fetch(url + `/${Harbor.id}`, {
                    method: "PUT", body: JSON.stringify(Harbor), headers: {
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
                    method: "POST", body: JSON.stringify(Harbor), headers: {
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
        const url = `http://localhost:4000/harbor`

        const getDatarow = () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setload(false)
                    setData(data)
                })
        }
        return (
            <HarborContext.Provider value={{datarow, setData, handleSubmit,Harbor, setHarbor, onChange, handleUpdate, handleDelete, initialvalues, open, setOpen ,handleClose, handleClickOpen}}>
                {props.children}
            </HarborContext.Provider>
        );
    }

    export default HarborContextProvider;