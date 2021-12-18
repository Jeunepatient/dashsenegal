import Restopright from "../Restopright";
import HarborTable from "./HarborTable";
import Box from '@mui/material/Box';
import { useContext } from "react";
import { Leftcontext } from "../../Context/Leftcontext";
const Harbor = () => {
    const {islight, dark, light} = useContext(Leftcontext)
    const theme = islight ? light : dark
    return ( 
        <Box sx={{marginLeft : '17%', textAlign: 'center', backgroundColor :theme.bg, color : theme.color}}>
            <Restopright />
            <HarborTable />
           
        </Box>
     );
}
 
export default Harbor;