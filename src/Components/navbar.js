import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class navbar extends Component {
    constructor() {
        super();
        this.flag = 1        
    }
    tglvar = () => {
        let disB = document.getElementById('id-r')
        let drp = document.getElementById('dr-d-lst')           
        if (this.flag === 1) {
            disB.style.display = 'flex'            
            disB.value = 'off'
            this.flag = 0;     
            disB.classList.add('dropDown');
            drp.style.display = 'block'            
        }
        else  {
            disB.style.display = 'none'
            disB.value = 'on'
            this.flag = 1;
            drp.style.display = 'none'
        }
        
    }

    render() {
        let { mode } = this.props;

        return (
            <>
                <header>
                    <nav className="main">
                        <ul style={{ paddingLeft: '0', marginBottom: '0' }} className='right' id='id-r'>
                            <Link to="/news"><li>News</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <div className="btn-theme-ctr">
                                <button onClick={this.props.ThemeToggle} className='theme-ctr'><ion-icon name={`${mode === 'dark' ? 'sunny-outline' : 'moon-outline'}`}></ion-icon></button>
                            </div>
                        </ul>

                        <ul className='left' style={{ paddingLeft: '0', marginBottom: '0' }}>
                            <h1><span className='left'><b><Link to="/">News-Crew</Link></b></span></h1>
                            <div className="dropDown" id='dr-d-lst'>
                                <li className='dropDownBtn'>Category</li>
                                <div className="dropDownContent">
                                    <br />
                                    <Link to="/business"><li>Business</li></Link>
                                    <Link to="/entertaiment"><li>Entertaiment</li></Link>
                                    <Link to="/general"><li>General</li></Link>
                                    <Link to="/health"><li>Health</li></Link>
                                    <Link to="/science"><li>Science</li></Link>
                                    <Link to="/technology"><li>Technology</li></Link>
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
