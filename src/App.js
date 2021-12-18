import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Leftside from "./components/Leftside";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import LeftContextProvider from "./Context/Leftcontext";
import Homepage from "./components/Homepage";
import './App.css'
import AuthContextProvider from "./Context/AuthContext";
import User from "./components/User";
import Authentification from "./authentification/Authentification";
// import Authentification from "./components/Authentification";
import Circleauth from "./components/Circleauth";
import Usersform from "./components/Usersform";
import Userformmat from "./components/Userformmat";
import Formfinal from "./components/Formfinal";
import ThemeConfig from "./ThemeConfig";
import AuthContextLoginProvider from './authentification/AuthContext'
import { useContext } from "react";
import { PrivateRoute } from "./PrivateRoute";
import StylesProvider from '@material-ui/styles/StylesProvider';
import createGenerateClassName from '@material-ui/styles/createGenerateClassName';
import UserContextProvider from "./components/User/UserContext";
import HarborContextProvider from "./components/Harbour/HarborContext";
import Harbor from "./components/Harbour/Harbor";
import TownContextProvider from "./components/Town/TownContext";
import Town from "./components/Town/Town";
import OfficeContextProvider from "./components/Office/OfficeContext";
import Office from "./components/Office/Office";
import CountryContextProvider from "./components/Country/CountryContext";
import Country from "./components/Country/Country";
import Drawerside from "./Drawerside";
const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'c',
    disableGlobal : true
  });
  return (
    <Router>
      <div className='app'>
      
        <HarborContextProvider>
        <UserContextProvider>
       <AuthContextProvider>
        <LeftContextProvider>
         <AuthContextLoginProvider> 
           <OfficeContextProvider>
          <TownContextProvider>
            <CountryContextProvider>
         <StylesProvider generateClassName={generateClassName}>
          <ThemeConfig>
          {/* <Usersform /> */}
          {/* <Circleauth /> */}
          {/* <Userformmat /> */}
          {/* <Formfinal /> */}
           {/* <Authentification /> */}
           {/* <Authentification /> */}
           <Drawerside />
           {/* {<Leftside /> } */}
            <Switch>
              
              <Route  path='/' exact  component={Authentification} />
              <PrivateRoute  path='/home' type="private" exact component={Homepage} />
              
              <PrivateRoute  path='/user' type="private"  component={User} />
              <PrivateRoute  path='/port'  type="private" component={Harbor} />
              <PrivateRoute  path='/town'  type="private" component={Town} />
              <PrivateRoute  path='/office' type="private"  component={Office} />
              <PrivateRoute  path='/country'  type="private" component={Country} />
            </Switch>
            </ThemeConfig>
            </StylesProvider> 
            </CountryContextProvider>
            </TownContextProvider> 
            </OfficeContextProvider>
            </AuthContextLoginProvider> 
        </LeftContextProvider>
        </AuthContextProvider>
        </UserContextProvider>
        </HarborContextProvider>
       
      </div>
    </Router> 
    
   );
}
 
export default App;