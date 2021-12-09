import { useContext, useState } from "react";
import MaterialTable from 'material-table'
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn'
import { Leftcontext } from "../Context/Leftcontext";

const Usersform = () => {

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };
    

    const useport = [
        {id:1, name : 'jeune', email:'di84454@gmail.com', phone: '622 28 34 88', city :'lapaz' },
        {id:2, name : 'moussa bangoura', email:'di84454@gmail.com', phone: '622 28 34 88', city :'lapaz' },
        {id:3, name : 'Ibrahima diallo', email:'di84454@gmail.com', phone: '622 28 34 88', city :'lapaz' },
        {id:4, name : 'idiatou bah', email:'di84454@gmail.com', phone: '622 28 34 88', city :'lapaz' },
        {id:5, name : 'Adama hawa balde', email:'di84454@gmail.com', phone: '622 28 34 88', city :'lapaz' },
    ]
    const [data, setData]= useState(useport)
    const columns = [
        {title : 'ID', field: 'id', editable : false},
        {title : 'Name', field: 'name'},
        {title : 'Email', field: 'email'},
        {title : 'Phone number', field: 'phone'},
        {title : 'city', field: 'city'},
    ]

    const {islight, light, dark} = useContext(Leftcontext)
    const theme = islight ? light : dark
    return ( 
        <div className="userleft">
            <h2>handle user port</h2>
            <MaterialTable style={{backgroundColor :theme.chart, color : theme.color  }}
            icons={tableIcons}
            title="user data"
            data={data}
            columns={columns}
            editable={ {
                onRowAdd: (newRow) => new Promise((resolve, reject) =>{
                    const updateRows =[...data, {id : Math.floor(Math.random() *1000) + 1,...newRow}]
                    setData(updateRows)
                    resolve()
                }),
                onRowDelete : selectedRow => new Promise((resolve, reject)=> {
                    const index= selectedRow.tableData.id
                    const updatedRows=[...data]
                    updatedRows.splice(index, 1)
                    setData(updatedRows)
                    resolve()
                }),
                onRowUpdate : (updatedRow, oldRow)=> new Promise((resolve, reject)=> {
                    const index = oldRow.tableData.id
                    const updatedRows = [...data]
                    updatedRows[index]= updatedRow
                    setData(updatedRows)
                    resolve()
                    
                })
            }}
            options={
                {
                    actionsColumnIndex : -1, addRowPosition : 'first'
                }
            }
            />
        </div>
     );
}
 
export default Usersform;