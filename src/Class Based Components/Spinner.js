import React, { Component } from 'react'
// import loading from './Loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      // <div style={{backgroundColor:'transparent',display:'flex',justifyContent:'center',alignItems:'center',height:'60vh'}}>
      //   <img src={loading} alt="Loading..." />        
      // </div>
      <div style={{width:'99vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="loader">
          <div className="loader-item"></div>
          <div className="loader-item"></div>
          <div className="loader-item"></div>
        </div>
      </div>
    )
  }
}