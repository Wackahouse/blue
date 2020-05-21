import React, { Component } from 'react';
import RoomCards from './RoomCards';
import './Home.css';

/*
We need a list of JSON objects that holds infor about each room
Once the server and db are setup, this is the variable that will store that info
private rooms will also have an access code
[members] needs to contain the name and the userid from the db
the owner field specifies the user id of the owner of the room
rooms := {id (int), owner (int), name (str), members ([Object object]), public (bool), (?)accssCode (str)}
*/
var rooms = [
{
	id: 763912,
	owner: 1,
	name: 'Wackahouse0', 
	members:[
	{name: 'Gurneet', userid: 1},
	{name: 'Andrei', userid: 2},
 	{name: 'Haikal', userid: 3},
 	{name: 'Finlay', userid: 4}
 	],
 	public: false,
 	accessCode: "iw93p4"
 },
 {
	id: 763910,
	owner: 1,
	name: 'Wackahouse0', 
	members:[
	{name: 'Gurneet', userid: 1},
	{name: 'Andrei', userid: 2},
 	{name: 'Haikal', userid: 3},
 	{name: 'Finlay', userid: 4}
 	],
 	public: true,
 },
 {
 	id: 986701,
 	owner: 6,
 	name: 'Wackahouse1',
 	members: [
 	{name: 'Red', userid: 6},
 	{name: 'Greta', userid: 7},
 	{name: 'Raluca', userid: 8}
 	],
 	public: true
 },
 {
 	id: 986702,
 	owner: 6,
 	name: 'Wackahouse1',
 	members: [
 	{name: 'Red', userid: 6},
 	{name: 'Greta', userid: 7},
 	{name: 'Raluca', userid: 8}
 	],
 	public: false,
 	accessCode: "937409"
 }
]
localStorage.setItem('rooms', JSON.stringify(rooms));


class JoinRoomModal extends Component {
	render() {
		return(
			<div className="modal fade" id="joinRoomModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  				<div className="modal-dialog" role="document">
    				<div className="modal-content">
      					<div className="modal-header text-center">
        					<h4 className="modal-title w-100 font-weight-bold">Join Private Room</h4>
        					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
          						<span aria-hidden="true">&times;</span>
        					</button>
      					</div>
      					<div className="modal-body mx-3">
        					<div className="md-form mb-5">
					      		<i className="fas fa-user prefix grey-text"></i>
					          	<input type="text" id="form3" className="form-control validate" />
					          	<label data-error="wrong" data-success="right" for="form3">Room Number</label>
        					</div>
      					</div>
      					<div className="modal-footer d-flex justify-content-center">
        					<button className="btn btn-indigo">Join</button>
      					</div>
    				</div>
  				</div>
			</div>
		);
	}
}

class Home extends Component {
	render() {
		return (
		    <div className="container">
		        <h1>Home Page</h1>
		        <div className="row justify-content-center">
		        	<div className="nav-button column">
		        		<button type="button" className="btn btn-info">Create New Room</button>
		        	</div>
		        	<div className="nav-button column">
						<JoinRoomModal></JoinRoomModal>
		        		<button type="button" className="btn btn-info" data-toggle="modal" data-target="#joinRoomModal">Join Private Room</button>
		        	</div>
		        </div>
		        <div className="md-form active-cyan-2 mb-3">
  				  <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
			    </div>
			    <RoomCards rooms={rooms}/>
		    </div>
		);
	}
}

export default Home;