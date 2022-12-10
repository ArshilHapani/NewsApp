import './App.css';
import Navbar from './Components/navbar';

//! To make quick react class based component type 'rcc'
import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  // name = 'Arshil' //? We can define direct class variable without using let or var
  render() {
    return (
      <>        
        <Navbar />
        <News/>
      </>
    )
  }
}



