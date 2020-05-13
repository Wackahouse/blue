import React, { Component } from 'react';
import RoomCard from '../components/RoomCard';

function generateRoomCard(room) {

}

class RoomCards extends Component {
	render() {
		var roomCards = [];
		for (var i = this.props.rooms.length - 1; i >= 0; i--) {
			if (this.props.rooms[i].public) {
				var roomCard = <RoomCard key={this.props.rooms[i].id} room={this.props.rooms[i]} />;
				roomCards.push(roomCard);
			}
		}
		return roomCards;
	}
}

export default RoomCards