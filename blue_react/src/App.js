import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function Home() {
  return (
    <div className="content container">
      <h1>Home Page</h1>
    </div>
  )
}

function Room() {
  return (
    <div className="content container">
      <h1>Room Page</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/Room' component={Room} exact/>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}



export default App;
