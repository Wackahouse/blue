import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

// accessible at urls of the form http://localhost:3000/Room/986701

/*
If the room is private and a user tries to joining without being a member, they are redirected to the main page
*/

function getMembersForRoom(roomid) {
	// return the member ids for the particular room
	let rooms = JSON.parse(localStorage.getItem('rooms'));
	if (rooms.length > 0) {
		for (var i = rooms.length - 1; i >= 0; i--) {
			let room = rooms[i];
			if(room.id == roomid) {
				return room.members;
				/*room.members.forEach((member) => {
					memberids.push(member.userid);
				});*/
			}
		}
	}
	return null;
}

function getPrivacyStatus(roomid) {
	let rooms = JSON.parse(localStorage.getItem('rooms'));
	if (rooms.length > 0) {
		for (var i = rooms.length - 1; i >= 0; i--) {
			let room = rooms[i];
			if(room.id == roomid) {
				return room.public;
				/*room.members.forEach((member) => {
					memberids.push(member.userid);
				});*/
			}
		}
	}
	return null;
}

function checkUserInRoom(members) {
	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
	var found = false;
	members.forEach((member) => {
		if(member.userid == currentUser.id) {
			found = true;
		}
	})
	return found;
}

class RoomPage extends Component {
	render () {
		let members = getMembersForRoom(this.props.match.params.id);
		if(!members) {
			alert('No such room found!');
			return (<Redirect to='/' />);
		}
		else if(!checkUserInRoom(members) && !getPrivacyStatus(this.props.match.params.id)) {
			alert('You are not a member of this private room!');
			return (<Redirect to='/' />);
		}
		return (<h1>Room {this.props.match.params.id}</h1>);
	}
}

export default RoomPage;