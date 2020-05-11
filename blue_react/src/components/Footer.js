import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className="footer light-blue border-bottom fixed-bottom">
		      <div className="container">
		        <div className="row border-bottom justify-content-center">
		          <a className="column nav-link" href="home">Home</a>
		          <a className="column nav-link" href="leaderboard">Leaderboard</a>
		          <a className="column nav-link" href="help">Help</a>
		          <a className="column nav-link" href="contact">Contact</a>
		        </div>
		        <div className="row justify-content-center">
		          <small className="text-muted">Wackahouse © 2020</small>
		        </div>
		      </div>
		    </footer>
    	);
	}
}

export default Footer;