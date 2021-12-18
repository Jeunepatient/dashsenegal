import React, { createContext,  useState, useEffect } from "react";

export const OfficeContext = createContext()


const OfficeContextProvider = (props) => {



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
        setOffice(oldData)
        handleClickOpen()
    }

    //initialize the value


    const initialvaluesoffice = { name: "", number: " "}
    // const [country, setCurrency] = React.useState('EUR');

    // add use data and hook it up
    const [officeset, setOffice] = useState(initialvaluesoffice)
    //make some tweaks about...
    const onChange = e => {


        const { value, id } = e.target

        setOffice({ ...officeset, [id]: value})
        // console.log(name, value)
        
    }

    const handleClose = () => {
        setOpen(false);
        setOffice(initialvaluesoffice)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        
        if (officeset.id) {
            const confirm = window.confirm("are you sure , you wanna update this data")

            confirm && fetch(url + `/${officeset.id}`, {
                method: "PUT", body: JSON.stringify(officeset), headers: {
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
                method: "POST", body: JSON.stringify(officeset), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    handleClose()
                    getDatarow()

                })
        }
        console.log(officeset)

    }
   
    const [dataOffice, setdataOffice] = useState([])
    const [pending, setload] = useState(true)
    useEffect(() => {
        getDatarow()
    }, [])
    const url = `http://localhost:4000/office`

    const getDatarow = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setload(false)
                setdataOffice(data)
            })
    }
    console.log(dataOffice)

    return ( 
        <OfficeContext.Provider value={{dataOffice, setdataOffice, handleSubmit,officeset, setOffice, onChange, handleUpdate, handleDelete, initialvaluesoffice, open, setOpen ,handleClose, handleClickOpen}}>
            {props.children}
        </OfficeContext.Provider>
     );
}
 
export default OfficeContextProvider;