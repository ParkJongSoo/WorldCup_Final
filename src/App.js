import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'bootstrap';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
