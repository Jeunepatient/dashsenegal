import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './authentification/AuthContext';
import Leftside from './components/Leftside';






export const  PrivateRoute = ({ component: Component,  type ,...rest}) => {
   const {login} = useContext(AuthContext)
   console.log(login)
    return (
        <Route {...rest} render={props => {
            if (login && type === "private") {
                // not logged in so redirect to login page with the return url
                <Leftside />
                return <Component {...props} />
            }
            else {
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }
            // <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            // authorized so return component
            // return <Component {...props} />
        }} />
    );
}