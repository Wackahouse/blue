import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import $ from 'jquery'; 

// accessible at urls of the form http://localhost:3000/Room/986701

/*
If the room is private and a user tries to joining without being a member, they are redirected to the main page
*/

export const getMembersForRoom = (roomid) => {
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

export const getPrivacyStatus = (roomid) => {
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

export const checkUserInRoom = (members)  => {
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
		if(!localStorage.getItem('currentUser')) {
			alert('You need to login before you can proceed!');
			return (<Redirect to='/Login' />);
			/*return (
				<div>
 					<div className="modal fade" id="centralModalDanger" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					   <div className="modal-dialog modal-notify modal-danger" role="document">
					       <div className="modal-content">
					       		<div className="modal-header">
						         	<p className="heading lead">Modal Danger</p>

						         	<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						           	<span aria-hidden="true" className="white-text">&times;</span>
						         	</button>
						       	</div>
						       	<div className="modal-body">
						         	<div className="text-center">
						           	<i className="fas fa-check fa-4x mb-3 animated rotateIn"></i>
						           	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis
						             	ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim,
						             	ab officiis totam.</p>
						         	</div>
						       	</div>
						       	<div className="modal-footer justify-content-center">
						         	<a type="button" className="btn btn-danger">Get it now <i className="far fa-gem ml-1 text-white"></i></a>
						         	<a type="button" className="btn btn-outline-danger waves-effect" data-dismiss="modal">No, thanks</a>
						       	</div>
					     	</div>
					   	</div>
					</div>
 				</div>
			);*/
		}
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