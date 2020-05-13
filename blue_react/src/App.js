import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Container from 'react-bootstrap/Container'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/*
NOTE:- When a user is logged in, remember to store the currentUser to localStorage
currentUser must be a JSON object 
(stringify it because setItem expects a string not object)
When reading the object, use JSON.parse*/

const responseFacebook = (response) => {
  console.log(response);
  // if we need a connection to the db for fb users it needs to go here
  let currentUser = {name: response.name,
    picture: response.picture,
    email: response.email,
    accessToken: response.accessToken,
    type: 'facebook'
  };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  window.location.reload();
}

const responseGoogle = (response) => {
  console.log(response);
  if (!localStorage.getItem('currentUser')){
    // if we need a connection to the db for gmail users it needs to go here
    let currentUser = {name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      email: response.profileObj.email,
      accessToken: response.accessToken
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.reload();
  }
}

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
    </div>
  )
}

function Leaderboard() {
  return (
    <div className="container">
      <h1>Leaderboard Page</h1>
    </div>
  )
}

function Help() {
  return (
    <div className="container">
      <h1>Help page</h1>
    </div>
  )
}

function Contact() {
  return (
    <div className="container">
      <h1>Contact us Page</h1>
    </div>
  )
}

function Login() {
  return(
    <div className="signup-form">
      <form action="#" method="post">
        <h2>Login</h2>
        <p className="hint-text">Login with your social media account or email address</p>
        <div className="social-btn text-center">
          <FacebookLogin 
            appId="1501831806656820"
            fields="name,email,picture"
            callback={responseFacebook}
            textButton="Facebook"
            redirectUri="/"
            cssClass="btn btn-primary btn-lg"
            icon="fa-facebook"
            />
          <GoogleLogin 
            clientId="58667510182-k1alatliu4pb91eadvgp2sk107mp9npm.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-danger btn-lg"><i className="fa fa-google"></i> Google</button>
            )}
            onSuccess={responseGoogle}
            onFailure={() => {console.log("google login failure")}}
            cookiePolicy={'single_host_origin'}
            cssClass="btn btn-primary btn-lg"
            isSignedIn={true}
          />
        </div>
        <div className="or-seperator"><b>or</b></div>
        <div className="form-group">
          <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Login</button>
          <button className="btn btn-success btn-lg btn-block signup-btn">Forgot Password</button>
        </div>
      </form>
      <div className="text-center">Don't have an account yet? <a href="signup">Sign up here</a></div>
  </div>
  );
}

function Signup() {
  return (
    <div className="signup-form">
      <form action="#" method="post">
      <h2>Create an Account</h2>
      <p className="hint-text">Sign up with your social media account or email address</p>
      <div className="social-btn text-center">
        <a href="#" className="btn btn-primary btn-lg"><i className="fa fa-facebook"></i> Facebook</a>
        <a href="#" className="btn btn-danger btn-lg"><i className="fa fa-google"></i> Google</a>
      </div>
      <div className="or-seperator"><b>or</b></div>
          <div className="form-group">
            <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
          </div>
      <div className="form-group">
            <input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required="required" />
          </div>
      <div className="form-group">
              <input type="password" className="form-control input-lg" name="password" placeholder="Password" required="required" />
          </div>
      <div className="form-group">
              <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required" />
          </div>  
          <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
          </div>
      </form>
      <div className="text-center">Already have an account? <a href="login">Login here</a></div>
  </div>
  )
}

function Friends() {
  if(localStorage.getItem('currentUser')) {
    return (
      <div className="container">
        <h1>Friends</h1>
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

function AccountSettings() {
  if(localStorage.getItem('currentUser')) {
    return (
      <div className="container">
        <h1>Account Settings</h1>
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

function GameSettings() {
  if(localStorage.getItem('currentUser')) {
    return (
      <div className="container">
        <h1>Game Settings</h1>
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

function Logout() {
  let currentUser = localStorage.getItem('currentUser');
  if(currentUser) {
    if(window.FB) {
      window.FB.logout(window.FB.getAccessToken());
    }
    localStorage.removeItem('currentUser');
    return (
      <div>
        <Redirect to="/" />
        {window.location.reload()}
      </div>
    );
  } else {
    return (
      <Redirect to='/' />);
  }
}

function App() {

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



export default App;
