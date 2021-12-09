import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const Mapcomponent = (props) => {
    const mapStyle ={
        with : '100%',
        height : '350px',
        left : '0'
    }
    return (  
        <div style={{width : '80%', marginLeft:'auto', marginRight :'auto'}}>
            <Map 
            google={props.google}
            zoom={5}
            style = {mapStyle}
            initialCenter={{lat:47.444, lng : -122.176}}
            >
            <Marker position={{lat:48.00, lng : -122.00}} />
          </Map>
        </div>
    );
}
 
export default GoogleApiWrapper({})(Mapcomponent);