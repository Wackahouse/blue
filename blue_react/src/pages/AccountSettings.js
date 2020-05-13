import React, { Component } from 'react';

class AccountSettings extends Component {
  render() {
    if(localStorage.getItem('currentUser')) {
        return (
          <div className="container">
            <h1>AccountSettings</h1>
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

export default AccountSettings;