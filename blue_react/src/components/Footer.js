import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className="footer light-blue border-bottom fixed-bottom">
		      <div class="container">
		        <div class="row border-bottom justify-content-center">
		          <a class="column nav-link" href="home">Home</a>
		          <a class="column nav-link" href="leaderboard">Leaderboard</a>
		          <a class="column nav-link" href="help">Help</a>
		          <a class="column nav-link" href="contact">Contact</a>
		        </div>
		        <div class="row justify-content-center">
		          <small class="text-muted">Wackahouse © 2020</small>
		        </div>
		      </div>
		    </footer>
    	);
	}
}

export default Footer;