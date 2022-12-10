import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {        
        return (
            <>
                <div>
                    <h4>News Component</h4>
                    <NewsItem />
                </div>
            </>
        )
    }
}
