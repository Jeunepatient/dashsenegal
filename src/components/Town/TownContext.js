import React, { createContext,  useState, useEffect } from "react";

export const TownContext = createContext()


const TownContextProvider = (props) => {



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
        setTown(oldData)
        handleClickOpen()
    }

    //initialize the value


    const initialvaluestown = { name: "", country_id: 'GUI', code: "abouja02"}
    // const [country, setCurrency] = React.useState('EUR');

    // add use data and hook it up
    const [Townset, setTown] = useState(initialvaluestown)
    //make some tweaks about...
    const onChange = e => {


        const { value, id, name } = e.target

        setTown({ ...Townset, [id]: value, [name]: value })
        // console.log(name, value)
        
    }

    const handleClose = () => {
        setOpen(false);
        setTown(initialvaluestown)
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        
        if (Townset.id) {
            const confirm = window.confirm("are you sure , you wanna update this data")

            confirm && fetch(url + `/${Townset.id}`, {
                method: "PUT", body: JSON.stringify(Townset), headers: {
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
                method: "POST", body: JSON.stringify(Townset), headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    handleClose()
                    getDatarow()

                })
        }
        console.log(Townset)

    }
   
    const [datatown, setDatatown] = useState([])
    const [pending, setload] = useState(true)
    useEffect(() => {
        getDatarow()
    }, [])
    const url = `http://localhost:4000/town`

    const getDatarow = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setload(false)
                setDatatown(data)
            })
    }
    console.log(datatown)

    return ( 
        <TownContext.Provider value={{datatown, setDatatown, handleSubmit,Townset, setTown, onChange, handleUpdate, handleDelete, initialvaluestown, open, setOpen ,handleClose, handleClickOpen}}>
            {props.children}
        </TownContext.Provider>
     );
}
 
export default TownContextProvider;