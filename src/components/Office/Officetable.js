import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { GridOverlay } from '@mui/x-data-grid';
import { Theme, styled } from '@mui/material/styles'
import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigationIcon from '@mui/icons-material/Navigation';

import user from '../table.module.css'
import { makeStyles } from '@material-ui/core'
import Avataruser from '../Avataruser';
import Avatar from '@mui/material/Avatar';
import { Leftcontext } from '../../Context/Leftcontext';



import OfficeModal from './OfficeModal';
import { OfficeContext } from './OfficeContext';
import { Typography } from '@mui/material';


const TownTable = () => {
    //destructuring the needful data from the context
    const {dataOffice, handleSubmit,officeset,  open , setOpen,handleUpdate, handleDelete,  onChange, handleClose, handleClickOpen} = useContext(OfficeContext)
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
   

    const columns = [
        { field: 'id', headerName: 'ID', flex: 60 },
        
        {
            field: 'name',
            headerName: 'Name',
            flex: 150,
            headerAlign: 'center',
            align: 'center',
            editable: true
        },
       
        {
            field: 'number',
            headerName: 'number',
            flex: 180,
            align: 'center',
            headerAlign: 'center',
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

   

    

    //delet an item on the table
   
    const [pagesize, setPageSize] = React.useState(10);
    const [rowheight, setRowheight] = React.useState(58)
    const heihgtdata = rowheight * (3 + pagesize)
 
    return (
        <div className={user.marg}>
        <Typography align= 'center' sx={{fontSize: '39px'}} size = "large" >Office</Typography>

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
                    rows={dataOffice}
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
                <OfficeModal open={open} handleClose={handleClose} data={officeset}  onChange={onChange} handleSubmit={handleSubmit} />
        </div>
    );
}

export default TownTable;