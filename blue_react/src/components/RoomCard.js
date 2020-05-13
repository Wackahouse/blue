import React, { Component } from 'react';
import './RoomCard.css';

class RoomCard extends Component {
	render() {
		var names = ""
		for (var i = this.props.room.members.length - 1; i >= 0; i--) {
			names += this.props.room.members[i].name + " ";
		}
		return(
			<div className="card-container card text-center">
			    <div className="card-header">
			        Room {this.props.room.id}
			    </div>
			    <div className="card-body">
			        <h5 className="card-title">{this.props.room.name}</h5>
			    	<p className="card-text">{names}</p>
			    	<a href="#" className="btn btn-primary">Join Room</a>
			    </div>
			    <div className="card-footer text-muted">
			    	{this.props.room.public ? "Public" : "Private"}
			    </div>
			</div>
			);
	}
}

export default RoomCard