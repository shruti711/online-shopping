import './App.css';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './Component/HomePage/HomePage';
import HeaderBanner from './Header';


function App() {

  const [ user, setUser] = useState({
    name: "",
    email:"",
    password:""
})

  return (
    <div className="App">
      <div className="Container">
        <HeaderBanner />
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage setLoginUser={setUser}/>
            </Route>
            <Login setLoginUser={setUser} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
