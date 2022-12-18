import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  //! To use props in constructor we have to define it as a function component argument
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  constructor(props) {
    super(props);
    //Creating state
    this.state = { //! Same as useState method to ser default state
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,      
    }
    document.title = `NewsCrew - ${this.capitalize(this.props.category)}`;
  }
  Arshil = {
      display:'none'
  }
  async UpdateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({ //!Changing the value of state
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount() { //! It runs exactly after render method is called       
    this.UpdateNews();
  }
  fetchMoreData = async() => {
    this.setState({
      page: this.state.page+1,
      loading:true
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`        
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ //!Changing the value of state
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,  
      loading:false                
    })       
  };

  render() {
    return (
      <>
        <div>
          <h4 align="center" className={`Top-hd-ttl ${this.props.mode === 'dark' ? 'dark-theme-text' : 'light-theme-text'}`}>
            Top Headlines - {this.capitalize(this.props.category)}
          </h4>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
              style = {{overflow:'visible'}}
            >
          <div className="row ">
            {/* //* Here loader is used to hide the element while loader is active */}       
              {this.state.articles.map((element) => { //! While using map method we have to provide unique key with every element
                return <div key={element.url}>
                  <NewsItem
                    newsUrl={element.url}
                    title={element.title ? (element.title.length >= 23 ? element.title.slice(0, 23) + "..." : element.title) : ""}
                    description={element.description ? (element.title.length >= 70 ? element.description.slice(0, 70) + "..." : element.title) : ""}
                    imageUrl={element.urlToImage}
                    mode={this.props.mode}
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
}
