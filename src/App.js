import './App.css';

//! To make quick react class based component type 'rcc'
 import React, { Component } from 'react'
 
 export default class App extends Component {
  name = 'Arshil' //? We can define direct class variable without using let or var
   render() {
     return (
       <div>App {this.name}</div>
     )
   }
 }
 