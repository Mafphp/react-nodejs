import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import * as axios from 'axios';
import Home from '../Pages/Home/Home';
import VehicleForm from '../components/VehicleForm';
import Footer from './Footer';
import Configuration from '../Pages/Configuration/Configuration';
function Header () {
    const [isLoggedIn, updateLoginStatus] = useState(false);
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    useEffect(() => {
      // verifyToken();
    });
    const verifyToken = async () => {
      const token = await axios.post('http://localhost:3001/token');
      if (token) {
        updateLoginStatus(true);
      }
    }
    const login = async(e) => {
      if (!username || !password) {
        alert('invalid data passed');
      }
      const token = await axios.post('http://localhost:3001/login', {username, password});
      if (token) {
        updateLoginStatus(true);
      }
    }
    const logout = async() => {
      await axios.post('http://localhost:3001/logout');
      // session clear
      // cookie clear
      // updateLoginStatus(false);
    }
    return (
      <div>
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Car Rental</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link  className="nav-link" to="/home"> Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create/vehicle">Create Car</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vehicles">Cars</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/configuration">configuration</Link>
          </li>
        </ul>
         {isLoggedIn ? 
         (   
          <ul className="navbar-nav float-left">
            <li className="nav-item active">
              <a className="nav-link" href="/home" onClick={logout}>Logout</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        )
         : 
         (
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Username" value={username} onChange={(e) => updateUsername(e.target.value)}/>
              <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(e) => updatePassword(e.target.value)}/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={login}>Login</button>
            </form>
         )}
   
      </div>
    </nav>
    <div>
      <Route exact path="/home" component={Home} />
      <Route exact path="/create/vehicle" component={VehicleForm} />
      <Route exact path="/configuration" component={Configuration} />
    </div>
    </Router>
    <Footer />
  </div>
  );
}
export default Header;