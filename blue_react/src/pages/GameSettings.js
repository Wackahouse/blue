import React, { Component } from 'react';

class GameSettings extends Component {
  render() {
    if(localStorage.getItem('currentUser')) {
        return (
          <div className="container">
            <h1>GameSettings</h1>
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

export default GameSettings;