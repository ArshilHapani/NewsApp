import React, { Component } from 'react';
export default class navbar extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="main">
                        <ul style={{ paddingLeft: '0', marginBottom: '0' }} className='right'>
                            <a href="/news"><li>News</li></a>
                            <a href="/about"><li>About</li></a>
                        </ul>
                        <ul className='left' style={{ paddingLeft: '0', marginBottom: '0' }}>
                            <span className='left'><b><a href="/home"><li>News-Crew</li></a></b></span>
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}
