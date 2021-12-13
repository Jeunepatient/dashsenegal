import Topright from "./Topright";
import * as React from 'react';
import home from './homepage.module.css'
import Mainhomepage from "./Mainhomepage";
import { GoogleMap, InfoWindow } from "react-google-maps";
import { useContext, useState } from "react";
import { Leftcontext } from "../Context/Leftcontext";
import Linechart from "./Linechart";
import Piechart from "./Piechart";
import Iframemaps from "./Iframemaps";
import Lineargradient from "./Lineargradient";
import Mapcomponent from "./Mapcomponent";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import { Marker } from "google-maps-react";
import Reactappchart from "./Reactappchart";
import Chartuser from "./Chartuser";
import Chartscatter from "./Chartscatter";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Scrolltop from "./Scrolltop";

// import Piechart from "./Piechart";
const Homepage = () => {
    const {islight, light, dark, marker} = useContext(Leftcontext)
    const theme = islight ? light : dark
    const [markselected, setmarkselect] = useState(null)
    
    // const Map = ()=> {
    //     return (
    //         <GoogleMap defaultZoom={10} defaultCenter={{lat : 45.421255, lng : -75.9654}} >
    //             {
    //                 marker.map(mark=> <Marker key={mark.id} position={{lat : mark.lat, lng : mark.lng}} onClick={()=> {setmarkselect(mark)}} />
    //                 )
    //             }
    //             {markselected && (
    //                <InfoWindow position={{lat :markselected.lat, lng :markselected.lng}} onCloseClick={()=>{setmarkselect(null)}}>
    //                    <div>harbour {markselected} selected </div>
    //                </InfoWindow>
    //             )}
    //         </GoogleMap>
    //     )
    // }
    // const WrappedMap = withScriptjs(withGoogleMap(Map))
    return ( 
        <div  className={home.home}>
            <div style={{backgroundColor :theme.bg, color : theme.color }} className={home.container}>
                {/**the right top of the homepage */}
                <Scrolltop />
                {/* <Topright /> */}
                <Mainhomepage />
                <div className={home.chart}>

                    {/* <Linechart /> */}
                    {/* <Lineargradient /> */}
                    <Reactappchart />
                    <Piechart />
                   
                </div>
                <Box  sx={{ width: '90%', margin : '0 auto', padding : '50px 0' }}>
                    <Grid container spacing={6}  rowSpacing={2}>
                        <Grid item xl={8}>
                            <Chartuser />
                        </Grid>
                        <Grid item xl={4}> 
                             <Chartscatter />
                        </Grid>
                    </Grid>
                    
                   

                </Box>
                

                {/* <Iframemaps /> */}
                {/* <Mapcomponent /> */}
                {/* <div style={{}} className={home.map}>
                    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_KEY_GOOGLEMAP}`} 
                    loadingElement={<div style={{height : '350px'}} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />} 
                    />
                </div> */}
                
            </div>
        </div>
     );
}
 
export default Homepage;