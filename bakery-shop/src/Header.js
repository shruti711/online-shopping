import './App.css';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled from 'styled-components';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Support from './Support';
import About from './About';

const List = styled.ul`
  text-align: left;
  >li {
      padding: 0.5rem;
      list-style : none;
      >a{
        text-decoration: none;
      }
  }
`;

const Menu = () => {

    return (
        <Router>
            <div>
                <List>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/Support">Contact to Customer</Link>
                    </li>
                </List>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/support">
                        <Support />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const Burger = ({ open, setOpen }) => {
    return (
        <button open={open} onClick={() => setOpen(!open)}>
        Menu <i class="arrow right"></i>
        </button>
    )
}

function HeaderBanner() {

    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <div className="App-header">
                <Burger open={open} setOpen={setOpen} />
                {open && (
                    <Menu open={open} setOpen={setOpen} />
                )}
            </div>
        </div>
    );
}

export default HeaderBanner;
