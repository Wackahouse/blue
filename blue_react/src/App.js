import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
    <div class="signup-form">
      <form action="#" method="post">
        <h2>Login</h2>
        <p class="hint-text">Login with your social media account or email address</p>
        <div class="social-btn text-center">
          <a href="#" class="btn btn-primary btn-lg"><i class="fa fa-facebook"></i> Facebook</a>
          <a href="#" class="btn btn-danger btn-lg"><i class="fa fa-google"></i> Google</a>
        </div>
        <div class="or-seperator"><b>or</b></div>
        <div class="form-group">
          <input type="text" class="form-control input-lg" name="username" placeholder="Username" required="required" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block signup-btn">Login</button>
          <button class="btn btn-success btn-lg btn-block signup-btn">Forgot Password</button>
        </div>
      </form>
      <div class="text-center">Don't have an account yet? <a href="signup">Sign up here</a></div>
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
  localStorage.removeItem('currentUser');
  return (
    <Redirect to="/" />
  );
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
