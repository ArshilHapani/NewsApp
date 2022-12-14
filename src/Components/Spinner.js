import React, { Component } from 'react'
// import loading from './Loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      // <div style={{backgroundColor:'transparent',display:'flex',justifyContent:'center',alignItems:'center',height:'60vh'}}>
      //   <img src={loading} alt="Loading..." />        
      // </div>
      <div style={{height:'70vh',display:'flex',alignItems:'center'}}>
        <div className="loader-wrapper">
          <div className="loader loader-outer">
            <div className="loader loader-inner"></div>
          </div>
        </div>
      </div>
    )
  }
}