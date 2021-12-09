import { GoogleMap } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
const Googlemap = () => {

    return ( 
        <GoogleMap defaultZoom={10} defaultCenter={{lat:45.421532, lng :-75.697189}} />
     );
}
 
const WrappedMap = withScriptjs(withGoogleMap(Map))
export default function Googlemap() {
    return <div>
        <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'} />
    </div>
};