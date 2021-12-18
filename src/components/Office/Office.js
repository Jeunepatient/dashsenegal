import { Box } from "@mui/material";
import Restopright from "../Restopright";
import Officetable from './Officetable'
const Office = () => {
    return ( 
        <Box sx={{marginLeft : '17%', textAlign: 'center'}}>
           <Restopright />
           <Officetable />
        </Box>
     );
}
 
export default Office;