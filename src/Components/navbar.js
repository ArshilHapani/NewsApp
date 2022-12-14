import React, { Component } from 'react';
export default class navbar extends Component {
    constructor() {
        super();
        this.flag = 1        
    }
    tglvar = () => {
        let disB = document.getElementById('id-r')
        console.log("tglvar");
        if (this.flag === 1) {
            disB.style.display = 'flex'            
            disB.value = 'off'
            this.flag = 0;            
        }
        else  {
            disB.style.display = 'none'
            disB.value = 'on'
            this.flag = 1;
        }
        
    }

    render() {
        let { mode } = this.props;

        return (
            <>
                <header>
                    <nav className="main">
                        <ul style={{ paddingLeft: '0', marginBottom: '0' }} className='right' id='id-r'>
                            <a href="/news"><li>News</li></a>
                            <a href="/about"><li>About</li></a>
                            <div className="btn-theme-ctr">
                                <button onClick={this.props.ThemeToggle} className='theme-ctr'><ion-icon name={`${mode === 'dark' ? 'sunny-outline' : 'moon-outline'}`}></ion-icon></button>
                            </div>
                        </ul>

                        <ul className='left' style={{ paddingLeft: '0', marginBottom: '0' }}>
                            <h1><span className='left'><b><a href="/home">News-Crew</a></b></span></h1>
                            <div className="dropDown">
                                <li className='dropDownBtn'>Category</li>
                                <div className="dropDownContent">
                                    <br />
                                    <a href="/"><li>business</li></a>
                                    <a href="/"><li>entertaiment</li></a>
                                    <a href="/"><li>General</li></a>
                                    <a href="/"><li>health</li></a>
                                    <a href="/"><li>science</li></a>
                                    <a href="/"><li>technology</li></a>
                                </div>
                            </div>
                        </ul>
                        <div className="toggle-btn-ctn">
                            <button className='toggle-btn' onClick={this.tglvar}><ion-icon name="menu-outline"></ion-icon></button>
                        </div>
                    </nav>
                </header>
            </>
        )

    }
}
