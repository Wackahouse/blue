import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md justify-content-between bg-primary navbar-dark fixed-top">
		      <a className="navbar-brand" href="/">Blue</a>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		        <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse" id="collapsibleNavbar">
		        <ul className="navbar-nav">
		          <li className="nav-item">
		            <a className="nav-link" href="leaderboard">Leaderboard</a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link" href="help">Help</a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link" href="contact">Contact</a>
		          </li>
		        </ul>
		        <ul className="navbar-nav ml-auto">
		          <li className="nav-item">
		            <a className="nav-link" href="signup">Login/Signup</a>
		          </li>
		        </ul>
		      </div>
		    </nav>
    	);
	}
}

export default Navbar