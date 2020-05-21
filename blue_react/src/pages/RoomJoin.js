import React, { Component } from 'react';
import { getPrivacyStatus, getMembersForRoom, checkUserInRoom } from './RoomPage';
import { Redirect } from "react-router-dom";

function getPrivateRoomCode(roomid) {
	// return the member ids for the particular room
	let rooms = JSON.parse(localStorage.getItem('rooms'));
	if (rooms.length > 0) {
		for (var i = rooms.length - 1; i >= 0; i--) {
			let room = rooms[i];
			if(room.id == roomid) {
				return room.accessCode;
			}
		}
	}
	return null;
}

function addMember(roomid, user) {
	let rooms = JSON.parse(localStorage.getItem('rooms'));
	if (rooms.length > 0) {
		for (var i = rooms.length - 1; i >= 0; i--) {
			let room = rooms[i];
			if(room.id == roomid) {
				rooms[i].members.push({name: user.name, userid: user.id})
			}
		}
		// update the database here instead
		console.log(rooms);
		localStorage.setItem('rooms', JSON.stringify(rooms));
		let redir = "/Room/"+roomid;
		window.location.href = redir;
	}
}

class RoomJoin extends Component {
	validateCode(roomid) {
		let usercode = document.getElementById('inputValidation').value;
		let roomcode = getPrivateRoomCode(roomid);
		if (roomcode == usercode) {
			// the user entered the correct code
			/*
			NOTE:- this is where we add the user to the db in the room
			For the time being I am adding them to the room in localStorage
			*/
			let currentUser = JSON.parse(localStorage.getItem('currentUser'));
			addMember(roomid, currentUser);
		} else {
			alert('Invalid Code!');
		}
	}
	render() {
		let members = getMembersForRoom(this.props.match.params.id);
		if(getPrivacyStatus(this.props.match.params.id)) {
			// this is not a private room, so it does not have an access code
			alert('This is not a private room!');
			return (<Redirect to='/' />);
		}
		else if(!members) {
			// room is completely empty so must be an invalid room
			alert('Invalid Room!')
			return (<Redirect to="/" />)
		}
		else if(checkUserInRoom(members)) {
			// the user is already a member of this game
			alert('User is already a member of this room!');
			let redir = "/Room/"+this.props.match.params.id;
			return (<Redirect to={redir} />)
		}
		return(
			<div className='container'>
				<br/><br/><br/>
				<h1>Join Request for room {this.props.match.params.id}</h1>
				<div className="md-form">
				    <i className="fas fa-lock prefix"></i>
				    <input type="password" id="inputValidation" className="form-control validate" />
				    <label htmlFor="inputValidation" data-error="wrong" data-success="right">Access Code</label>
				</div>
				<div className='text-center'>
					<button type="button" className="btn btn-default" onClick={() => this.validateCode(this.props.match.params.id)}>Submit</button>
				</div>
			</div>
		);
	}
}

export default RoomJoin;