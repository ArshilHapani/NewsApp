import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    let flag = 1
    const tglvar = () => {
        let disB = document.getElementById('id-r')
        let drp = document.getElementById('dr-d-lst')
        if (flag === 1) {
            disB.style.display = 'flex'
            disB.value = 'off'
            flag = 0;
            disB.classList.add('dropDown');
            drp.style.display = 'block'
        }
        else {
            disB.style.display = 'none'
            disB.value = 'on'
            flag = 1;
            drp.style.display = 'none'
        }

    }



    return (
        <>
            <header>
                <nav className="main">
                    <ul style={{ paddingLeft: '0', marginBottom: '0' }} className='right' id='id-r'>
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
                        <Link to="/about"><li>About</li></Link>
                        <div className="btn-theme-ctr">
                            <button onClick={props.ThemeToggle} className='theme-ctr'><ion-icon name={`${props.mode === 'dark' ? 'sunny-outline' : 'moon-outline'}`}></ion-icon></button>
                        </div>
                    </ul>

                    <ul className='left' style={{ paddingLeft: '0', marginBottom: '0' }}>
                        <h1><span className='left'><b><Link to="/">News-Crew</Link></b></span></h1>

                    </ul>
                    <div className="toggle-btn-ctn">
                        <button className='toggle-btn' onClick={tglvar}><ion-icon name="menu-outline"></ion-icon></button>
                    </div>
                </nav>
            </header>
        </>
    )


}
export default Navbar;