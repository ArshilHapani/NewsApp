import React, { Component } from 'react'

export default class NewsItem extends Component {
  // constructor() {
  //   super();  //! Constructor must be defined using super() from base class
  //   //! It runs 3 times as we used news item 3 times 
  // }
  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date } = this.props; //!Method to declare props in class based component by destructuring title and description from this.props so we can use props diretct instead of this.props.mode
    return (
      <div>
        {/* <div className={`custom-card ${this.props.mode === 'dark'?'dark-theme-container':'light-theme-container'}`}> */}        
        <div className={`custom-card ${mode === 'dark' ? 'dark-theme-container' : 'light-theme-container'}`}>
          <img src={!imageUrl ? "https://www.brightlysoftware.com/sites/default/files/styles/medium_hq/public/image/2022-08/TSR-News-Default.png.webp?itok=K1kbbkRt" : imageUrl} alt='failed to load img or img not available' className="card-image" />
          <div className="card-bdy">
            <h5 className="card-ttl">{title}</h5>
            <p className='card-desc'>{description} <br />
              <small className='smalltxtTag'>By {author} on {new Date(date).toGMTString()}</small>
            </p>
            <a rel='noreferrer' id='rpl' href={newsUrl} target="_blank" className="news-dtl-btn">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
/* <div className="card" style={{ width: '18rem' }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
          </div>
        </div> */
