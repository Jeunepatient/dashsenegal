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


const App = () => {
  return (
    <Router>
      <div className='app'>
       <AuthContextProvider>
        <LeftContextProvider>
          <ThemeConfig>
          {/* <Usersform /> */}
          {/* <Circleauth /> */}
          {/* <Userformmat /> */}
          {/* <Formfinal /> */}
           {/* <Authentification /> */}
           <Authentification />
           {/* <Leftside /> */}
            <Switch>
              {/* <Route path='/left' component ={Leftside} /> */}
              <Route path='/h' exact component={Homepage} />
              <Route path='/user' component={User} />
            </Switch>
            </ThemeConfig>
        </LeftContextProvider>
        </AuthContextProvider>
      </div>
    </Router> 
    
   );
}
 
export default App;