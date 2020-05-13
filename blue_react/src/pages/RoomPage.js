import React, { Component } from 'react';

// accessible at urls of the form http://localhost:3000/Room/986701

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

class RoomPage extends Component {
	render () {
		console.log(getMembersForRoom(this.props.match.params.id))
		return (<h1>Room {this.props.match.params.id}</h1>);
	}
}

export default RoomPage;