import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Contents from './components/Contents';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'bootstrap';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Contents/>
    </div>
  );
}

export default App;
