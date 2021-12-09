import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Leftside from "./components/Leftside";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import LeftContextProvider from "./Context/Leftcontext";
import Homepage from "./components/Homepage";
import './App.css'
import AuthContextProvider from "./Context/AuthContext";
import User from "./components/User";
import Authentification from "./components/Authentification";
import Circleauth from "./components/Circleauth";
import Usersform from "./components/Usersform";
import Userformmat from "./components/Userformmat";


const App = () => {
  return (
    <Router>
      <div className='app'>
       <AuthContextProvider>
        <LeftContextProvider>
          {/* <Usersform /> */}
          {/* <Circleauth /> */}
          <Userformmat />
           {/* <Authentification /> */}
           {/* <Leftside /> */}
            <Switch>
              {/* <Route path='/left' component ={Leftside} /> */}
              <Route path='/h' exact component={Homepage} />
              <Route path='/user' component={User} />
            </Switch>
        </LeftContextProvider>
        </AuthContextProvider>
      </div>
    </Router> 
    
   );
}
 
export default App;