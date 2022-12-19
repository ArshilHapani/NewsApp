import React from 'react'

const Spinner = () => {
  return (
    <div style={{ width: '99vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="loader">
        <div className="loader-item"></div>
        <div className="loader-item"></div>
        <div className="loader-item"></div>
      </div>
    </div>
  )
}
export default Spinner;