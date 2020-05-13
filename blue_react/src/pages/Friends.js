import React, { Component } from 'react';

class Friends extends Component {
	render() {
		if(localStorage.getItem('currentUser')) {
		    return (
		      <div className="container">
		        <h1>Friends</h1>
		      </div>
		    );
		  } else {
		    return (
		    <div className="container">
		      <h1>The user needs to Login first</h1>
		    </div>
		    );
		}
	}
}

export default Friends;