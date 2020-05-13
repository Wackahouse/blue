import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import Container from 'react-bootstrap/Container'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Friends from './pages/Friends';
import AccountSettings from './pages/AccountSettings';
import GameSettings from './pages/GameSettings';
// any additional pages must be imported here and added to the BrowserRouter in the rendering of App

/*
NOTE:- When a user is logged in, remember to store the currentUser to localStorage
currentUser must be a JSON object 
(stringify it because setItem expects a string not object)
When reading the object, use JSON.parse
The currently logged in user is accessible at localStorage.getItem('currentUser');
*/

export const responseFacebook = (response) => {
  console.log(response);
  // if we need a connection to the db for fb users it needs to go here
  let currentUser = {name: response.name,
    picture: response.picture.data.url,
    email: response.email,
    accessToken: response.accessToken,
    type: 'facebook'
  };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  window.location.reload();
}

export const responseGoogle = (response) => {
  console.log(response);
  if ((!localStorage.getItem('currentUser')) || localStorage.getItem('currentUser') === "facebook" ){
    // if we need a connection to the db for gmail users it needs to go here
    let currentUser = {name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      email: response.profileObj.email,
      accessToken: response.accessToken,
      type: 'google'
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.reload();
  }
}

function Logout() {
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if(currentUser != null) {
    if(window.FB) {
      window.FB.logout(window.FB.getAccessToken());
    } 
    localStorage.removeItem('currentUser');
    if(currentUser.type === "google") {
      return (
        <div>
          <GoogleLogout
            clientId="58667510182-k1alatliu4pb91eadvgp2sk107mp9npm.apps.googleusercontent.com"
              render={renderProps => (
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="dropdown-item">Logout</button>
              )}
              onLogoutSuccess={console.log("Logging out")}
          ></GoogleLogout>
          <Redirect to="/" />
          {window.location.reload()}
        </div>
      );
    }
    return (
      <div>
        <Redirect to="/" />
        {window.location.reload()}
      </div>
    );
  } 
  else {
    return (
      <Redirect to='/' />);
  }
}

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Navbar currentUser={JSON.parse(localStorage.getItem('currentUser'))}/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/leaderboard' component={Leaderboard} exact/>
          <Route path='/contact' component={Contact} exact/>
          <Route path='/help' component={Help} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/signup' component={Signup} exact/>
          <Route path='/friends' component={Friends} exact/>
          <Route path='/account-settings' component={AccountSettings} exact/>
          <Route path='/game-settings' component={GameSettings} exact/>
          <Route path='/logout' component={Logout} exact/>
          <Redirect to='/' />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}



export default App;
