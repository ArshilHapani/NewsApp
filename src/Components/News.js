import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    //Creating state
    this.state = { //! Same as useState method to ser default state
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() { //! It runs exactly after render method is called     
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=1&pageSize=20`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ //!Changing the value of state
      articles: parseData.articles,
      totalResults: parseData.totalResults
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })


  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      alert("Nothing to show there")
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=769f5fabe05842a79bf30e2124a5f4ca&page=${this.state.page + 1}&pageSize=20`
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })
    }
  }

  render() {
    return (
      <>
        <div>
          <h4 align="center" className="Top-hd-ttl">
            Top Headlines
          </h4>
          <div className="row">
            {this.state.articles.map((element) => { //! While using map method we have to provide unique key with every element
              return <div key={element.url}>
                <NewsItem
                  newsUrl={element.url}
                  title={element.title ? (element.title.length >= 25 ? element.title.slice(0, 25) + "..." : element.title) : ""}
                  description={element.description ? (element.title.length >= 70 ? element.description.slice(0, 70) + "..." : element.title) : ""}
                  imageUrl={element.urlToImage}
                />
              </div>
            })}

          </div>
          <div className="nxt-prev-cont">
            <button disabled={this.state.page <= 1} className="nxt-prev" onClick={this.handlePrevClick}><ion-icon name="chevron-back-outline"></ion-icon> </button>
            <button className="nxt-prev" onClick={this.handleNextClick}> <ion-icon name="chevron-forward-outline"></ion-icon></button>
          </div>
        </div>
      </>
    );
  }
}
