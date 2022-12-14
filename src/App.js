import Navbar from './Components/navbar';
//! To make quick react class based component type 'rcc'
import React, { Component } from 'react'
import News from './Components/News';
import PropTypes from 'prop-types'


export default class App extends Component {
  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string,
  }
  static defaultProps = {
    country:'in',
    pageSize:'5',
    category:'general',
  }
  constructor() {
    super();
    this.state = {
      mode: 'light',
    }
  }
  ThemeToggle = () => {
    if (this.state.mode === 'light') {
      document.body.style.backgroundColor = 'black'
      document.body.style.Color = 'white'      
      this.setState({
        mode: 'dark',
      })
    }
    else  {
      document.body.style.backgroundColor = 'white'
      document.body.style.Color = 'black'      
      this.setState({
        mode: 'light',
      })
    }
  }
  // name = 'Arshil' //? We can define direct class variable without using let or var
  render() {
    return (
      <>
        <div>
          <Navbar ThemeToggle={this.ThemeToggle} mode={this.state.mode} />
          <News
            pageSize='9'
            mode={this.state.mode} 
            country ='in'
            category = 'technology'
            />
        </div>
      </>
    )
  }
}
// TODO Making this using function component and making textutils using class based component
//TODO make trending news component slider like image slider in main page
