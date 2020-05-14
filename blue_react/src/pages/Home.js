import React, { Component } from 'react';
import RoomCards from './RoomCards';
import './Home.css';

/*
We need a list of JSON objects that holds infor about each room
Once the server and db are setup, this is the variable that will store that info
private rooms will also have an access code
[members] needs to contain the name and the userid from the db
rooms := {id (int),name (str), members ([Object object]), public (bool), (?)accssCode (str)}
*/
var rooms = [
{
	id: 763912,
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
		        		<button type="button" className="btn btn-info">Join Private Room</button>
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