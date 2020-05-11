import React from 'react';
import Button from 'react-bootstrap/Button'
import logo from './logo.svg';
import './App.css';
import './navbar.css'

function navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
      <a className="navbar-brand" href="/">Blue</a>
    </nav>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default navbar;
