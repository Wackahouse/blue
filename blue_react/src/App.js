import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'jquery';

function Home() {
  return (
    <div className="content container">
      <h1>Home Page</h1>
    </div>
  )
}

function Leaderboard() {
  return (
    <div className="content container">
      <h1>Leaderboard Page</h1>
    </div>
  )
}

function Help() {
  return (
    <div className="content container">
      <h1>Help page</h1>
    </div>
  )
}

function Contact() {
  return (
    <div className="content container">
      <h1>Contact us Page</h1>
    </div>
  )
}

function Login() {
  return (
    <div className="content container">
      <h1>Login/Signup</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/leaderboard' component={Leaderboard} exact/>
        <Route path='/contact' component={Contact} exact/>
        <Route path='/help' component={Help} exact/>
        <Route path='/login' component={Login} exact/>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}



export default App;
