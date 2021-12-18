import React,  { createContext, useEffect, useState } from "react";


export const CountryContext = createContext()

const CountryContextProvider = (props) => {



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
        setCountry(oldData)
        handleClickOpen()
    }

    //initialize the value


    const initialvaluecountry = { name: "", code: "",  zone_id: "1"}
    // const [country, setCurrency] = React.useState('EUR');

    // add use data and hook it up
    const [countryset, setCountry] = useState(initialvaluecountry)
    //make some tweaks about...
    const onChange = e => {


        const { value, id , name} = e.target

        setCountry({ ...countryset, [id]: value, [name]:value})
        // console.log(name, value)
        
    }

    const handleClose = () => {
        setOpen(false);
        setCountry(initialvaluecountry)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        
        if (countryset.id) {
            const confirm = window.confirm("are you sure , you wanna update this data")

            confirm && fetch(url + `/${countryset.id}`, {
                method: "PUT", body: JSON.stringify(countryset), headers: {
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
                method: "POST", body: JSON.stringify(countryset), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    handleClose()
                    getDatarow()

                })
        }
        console.log(countryset)

    }
   
    const [dataCountry, setDataCountry] = useState([])
    const [pending, setload] = useState(true)
    useEffect(() => {
        getDatarow()
    }, [])
    const url = `http://localhost:4000/country`

    const getDatarow = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setload(false)
                setDataCountry(data)
            })
    }


    return ( 
        <CountryContext.Provider value={{dataCountry, setDataCountry, handleSubmit,countryset, setCountry, onChange, handleUpdate, handleDelete, initialvaluecountry, open, setOpen ,handleClose, handleClickOpen}}>
            {props.children}
        </CountryContext.Provider>
     );
}
 
export default CountryContextProvider;