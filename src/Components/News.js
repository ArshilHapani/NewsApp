import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `NewsCrew - ${capitalize(props.category)}`;
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const UpdateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setloading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(70);
    setarticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setloading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    UpdateNews();
  }, [])

  const fetchMoreData = async () => {
    setpage(page + 1);
    setloading(true)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();
    setarticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
    setloading(false);
  };

  return (
    <>
      <div>
        <h4 align="center" className={`Top-hd-ttl ${props.mode === 'dark' ? 'dark-theme-text' : 'light-theme-text'}`} style={{marginTop:'15vh'}}>
          Top Headlines - {capitalize(props.category)}
        </h4>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          style={{ overflow: 'visible' }}
        >
          <div className="row ">
            {articles.map((element) => {
              return <div key={element.url}>
                <NewsItem
                  newsUrl={element.url}
                  title={element.title ? (element.title.length >= 23 ? element.title.slice(0, 23) + "..." : element.title) : ""}
                  description={element.description ? (element.title.length >= 70 ? element.description.slice(0, 70) + "..." : element.title) : ""}
                  imageUrl={element.urlToImage}
                  mode={props.mode}
                  author={!element.author ? "unknown" : element.author}
                  date={!element.publishedAt ? "unknown" : element.publishedAt}
                  source={element.source.name}
                />
              </div>
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}


News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
}

News.defaultProps = {
  country: 'in',
  pageSize: '6',
  category: 'general',
}

export default News;