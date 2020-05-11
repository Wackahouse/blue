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
  return (
    <div className="container">
      <h1>Login/Signup Page</h1>
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
      <Footer />
    </BrowserRouter>
  );
}



export default App;
