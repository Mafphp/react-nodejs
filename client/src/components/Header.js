import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Pages/Home/Home';
import VehicleForm from '../components/VehicleForm';
import Footer from './Footer';
import Configuration from '../Pages/Configuration/Configuration';
function Header () {
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
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="Username" />
          <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </form>
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