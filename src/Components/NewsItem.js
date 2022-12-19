import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, mode, author, date } = props;
  return (
    <div>
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
export default NewsItem;
