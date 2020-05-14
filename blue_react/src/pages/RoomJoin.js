import React, { Component } from 'react';
import { getPrivacyStatus } from './RoomPage';

function getPrivateRoomCode(roomid) {

}

class RoomJoin extends Component {
	render() {
		return(
			<div className='container'>
				<br/><br/><br/>
				<h1>Join Request for room {this.props.match.params.id}</h1>
				<div className="md-form">
				    <i className="fas fa-lock prefix"></i>
				    <input type="password" id="inputValidationEx2" className="form-control validate" />
				    <label for="inputValidationEx2" data-error="wrong" data-success="right">Acess Code</label>
				</div>
				<div class='text-center'>
					<button type="button" class="btn btn-default">Submit</button>
				</div>
				<h1>Privacy Status: {getPrivacyStatus(this.props.match.params.id)}</h1>
			</div>
		);
	}
}

export default RoomJoin;