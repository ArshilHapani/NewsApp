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
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `NewsCrew - ${this.capitalize(this.props.category)}`;
  }

  async UpdateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ //!Changing the value of state
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })

  }

  async componentDidMount() { //! It runs exactly after render method is called     
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=1&pageSize=${this.props.pageSize}`
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({ //!Changing the value of state
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false
    // })
    this.UpdateNews();
  }

  // handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseData.articles,
  //   //   loading: false
  //   // })
  //   this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.UpdateNews();
  // }
  // handleNextClick = async () => {
  //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) { }
  //   // else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
  //   //   let data = await fetch(url);
  //   //   this.setState({ loading: true });
  //   //   let parseData = await data.json();
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parseData.articles,
  //   //     loading: false
  //   //   })
  //   // }
  //   this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.UpdateNews();
  // }
  fetchMoreData = async() => {
    this.setState({
      page: this.state.page+1,
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ //!Changing the value of state
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    })

  };

  render() {
    return (
      <>
        <div>
          <h4 align="center" className={`Top-hd-ttl ${this.props.mode === 'dark' ? 'dark-theme-text' : 'light-theme-text'}`}>
            Top Headlines - {this.capitalize(this.props.category)}
          </h4>
          <div className="row ">
            {/* //* Here loader is used to hide the element while loader is active */}

            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
              {{/**  !this.state.loading*/ } && this.state.articles.map((element) => { //! While using map method we have to provide unique key with every element
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
            </InfiniteScroll>
            {/* {this.state.loading && <Spinner />} //TODO */}
          </div>
          {/* <div className="nxt-prev-cont">
            <button disabled={this.state.page <= 1} className={`nxt-prev ${this.props.mode === 'dark' ? 'dark-theme-text' : 'light-theme-text'}`} onClick={this.handlePrevClick}><ion-icon name="chevron-back-outline"></ion-icon> </button>


            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className={`nxt-prev ${this.props.mode === 'dark' ? 'dark-theme-text' : 'light-theme-text'}`} onClick={this.handleNextClick}> <ion-icon name="chevron-forward-outline"></ion-icon></button>
          </div> */}
        </div>
      </>
    );
  }
}
