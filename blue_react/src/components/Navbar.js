import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import './Navbar.css';

class Navbar extends Component {
	render() {
		if(!this.props.currentUser) {
			return (
				<nav className="navbar navbar-expand-md justify-content-between bg-primary navbar-dark fixed-top">
			      <a className="navbar-brand" href="/">Blue</a>
			      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			        <span className="navbar-toggler-icon"></span>
			      </button>
			      <div className="collapse navbar-collapse" id="collapsibleNavbar">
			        <ul className="navbar-nav">
			          <li className="nav-item">
			            <a className="nav-link" href="/">Rooms</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="/leaderboard">Leaderboard</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="/help">Help</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="/contact">Contact</a>
			          </li>
			        </ul>
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item">
			            <a className="nav-link" href="/login">Login</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="/signup">Signup</a>
			          </li>
			        </ul>
			      </div>
			    </nav>
	    	);
    	} else {
    		return (
    			<nav className="navbar navbar-expand-md justify-content-between bg-primary navbar-dark fixed-top">
			      <a className="navbar-brand" href="/">Blue</a>
			      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			        <span className="navbar-toggler-icon"></span>
			      </button>
			      <div className="collapse navbar-collapse" id="collapsibleNavbar">
			        <ul className="navbar-nav">
			          <li className="nav-item">
			            <a className="nav-link" href="/">Rooms</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="/leaderboard">Leaderboard</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="/help">Help</a>
			          </li>
			          <li className="nav-item">
			            <a className="nav-link" href="/contact">Contact</a>
			          </li>
			        </ul>
			        <ul className="navbar-nav ml-auto">
			          <li className="nav-item dropdown">
					      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
					        <img src={this.props.currentUser.picture} width="30px" height="30px"></img>  {this.props.currentUser.name}
					      </a>
					      <div className="dropdown-menu dropdown-menu-right">
					        <a className="dropdown-item" href="/friends">Friends</a>
					        <a className="dropdown-item" href="/game-settings">Game Settings</a>
					        <a className="dropdown-item" href="/account-settings">Account Settings</a>
					        <a className="dropdown-item" href="/logout">Logout</a>
					      </div>
					    </li>
			        </ul>
			      </div>
			    </nav>
    		);
    	}
	}
}

export default Navbar