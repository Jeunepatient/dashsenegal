import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { GridOverlay } from '@mui/x-data-grid';
import { Theme, styled } from '@mui/material/styles'
import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import { Leftcontext } from "../Context/Leftcontext";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigationIcon from '@mui/icons-material/Navigation';
import Dialogmodal from './Dialogmodal';
import user from './table.module.css'
import { makeStyles } from '@material-ui/core'
import Avataruser from './Avataruser';
import Avatar from '@mui/material/Avatar';



const Userformmat = () => {


    //light or dark mode
    const { islight, dark, light } = useContext(Leftcontext)
    const theme = islight ? light : dark

    //customize the interface





    function CustomLoadingOverlay() {
        return (
            <GridOverlay>
                <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                    <LinearProgress />
                </div>
            </GridOverlay>
        );
    }


    //pending before the data
    const [pending, setload] = useState(true)

    const columns = [
        { field: 'id', headerName: 'ID', flex: 60 },
        {
            field: 'avatar', headerName: 'avatar', width: 60, renderCell: (params) => (
                
                // <Avataruser />
               
                     <Avatar>{params.row.firstName[0]}</Avatar>
               
               
              
            )
        },
        {
            field: 'firstName',
            headerName: 'First name',
            flex: 150,
            headerAlign: 'center',
            align: 'center',
            editable: true
        },
        {
            field: 'lastname',
            headerName: 'Last name',
            flex: 150,
            align: 'center',
            headerAlign: 'center',
            editable: true
        },
        {
            field: 'email',
            headerName: 'email',
            flex: 180,
            align: 'center',
            headerAlign: 'center',
            editable: true
        },
        {
            field: 'phone',
            headerName: 'Phone',
            flex: 150,
            headerAlign: 'center',
            align: 'center',
            editable: true
        },
        {
            field: 'country',
            headerName: 'Country',
            flex: 150,
            headerAlign: 'center',
            align: 'center',
            editable: true
        },
        {
            field: 'action', headerName: 'Action', headerAlign: 'center', flex: 200, align: 'center', renderCell: (params) =>
            (<div>
                <Box sx={{ '& > :not(style)': { m: 1 } }} >
                    <Fab color="secondary" sx={{ boxShadow: 0 }} size="small" onClick={() => handleUpdate(params.row)} color='primary' aria-label="edit">
                        <EditIcon />
                    </Fab>
                    <IconButton onClick={() => handleDelete(params.id)} aria-label="delete" color='error' size="large">
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                    {/* <Button variant="outlined" color='error' onClick={() => handleDelete(params.id)} startIcon={<DeleteIcon />} >Delete</Button> */}
                </Box>
                {/* <Button variant='outlined' color='primary'>edit</Button> */}

            </div>)
        }
    ]
    //add new user on the table

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData(initialvalues)
    };

    //delet an item on the table
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
        setFormData(oldData)
        handleClickOpen()
    }

    //initialize the value
  
   
    const initialvalues = { firstName: "", email: "", lastname: '', phone: "", country : 'Guinea'}
    // const [country, setCurrency] = React.useState('EUR');
    
    // add use data and hook it up
    const [formData, setFormData] = useState(initialvalues)
    //make some tweaks about...
    const onChange = e => {
     
     
        const { value, id, name } = e.target
       
        setFormData({ ...formData, [id]: value, [name]: value})
        // console.log(name, value)
        // console.log(name)
    }
    const handleSubmit = () => {
        if (formData.id) {
            const confirm = window.confirm("are you sure , you wanna update this data")

            confirm && fetch(url + `/${formData.id}`, {
                method: "PUT", body: JSON.stringify(formData), headers: {
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
                method: "POST", body: JSON.stringify(formData), headers: {
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
    const [datarow, setData] = useState([
        // {id:1, lastname : 'Diallo', firstName: 'Ibrahima', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:2, lastname : 'Barry', firstName: 'moussa', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:3, lastname : 'Bangoura', firstName: 'yagouba', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:4, lastname : 'Diallo', firstName: 'Jeune', email : 'di84454@gmail.com', phone: '624 82 50 00'},
        // {id:5, lastname : 'Bah', firstName: 'Idiatou', email : 'di84454@gmail.com', phone: '624 82 50 00'},
    ])

    useEffect(() => {
        getDatarow()
    }, [])
    const url = `http://localhost:4000/users`

    const getDatarow = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setload(false)
                setData(data)
            })
    }

    const [pagesize, setPageSize] = React.useState(10);
    const [rowheight, setRowheight] = React.useState(58)
    const heihgtdata = rowheight * (3 + pagesize)
    console.log(datarow)
    return (
        <div>


            <div style={{ height : heihgtdata}} className={user.userform}>
                <DataGrid
                    rowHeight={rowheight}
                    sx={{
                        color: theme.color,
                        backgroundColor: theme.chart,
                        borderColor: theme.bg,
                     
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                    rows={datarow}
                    rowHeight={58}
                    columns={columns}
                    disableColumnReorder={false}
                    pageSize={pagesize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 15, 20, 25]}
                    onCellDoubleClick={(params, event) => {
                        if (!event.ctrlKey) {
                            event.defaultMuiPrevented = true;
                        }
                    }}
                    pagination
                    components={{
                        Toolbar: GridToolbar,
                        LoadingOverlay: CustomLoadingOverlay
                    }}

                    checkboxSelection
                    disableSelectionOnClick
                //  loading
                />
                <div>

                    
                </div>
              

            </div>
            <Box sx={{ '& > :not(style)': { m: 1 } }} >
                        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Box>
                <Dialogmodal open={open} handleClose={handleClose} data={formData}  onChange={onChange} handleSubmit={handleSubmit} />
        </div>
    );
}

export default Userformmat;