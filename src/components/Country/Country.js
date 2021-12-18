import Restopright from "../Restopright";
import { Box } from "@mui/material";
import CountryTable from "./CountryTable";

const Country = () => {
    return ( 
        <Box sx={{marginLeft : '17%', textAlign : 'center'}}>
            <Restopright />
            <CountryTable />
        </Box>
     );
}
 
export default Country;