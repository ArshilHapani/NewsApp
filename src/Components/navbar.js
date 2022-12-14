import React, { Component } from 'react';
export default class navbar extends Component {
    render() {
        let {mode} = this.props
        return (
            <>
                <header>
                    <nav className="main">
                        <ul style={{ paddingLeft: '0', marginBottom: '0' }} className='right'>
                            <a href="/news"><li>News</li></a>
                            <a href="/about"><li>About</li></a>
                            <div className="btn-theme-ctr">
                            <button onClick={this.props.ThemeToggle} className='theme-ctr'><ion-icon name={`${mode === 'dark'?'sunny-outline':'moon-outline'}`}></ion-icon></button>
                        </div>
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
