import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="navParent">
                    <div className="title">
                        <Link to="/">CricInator</Link>
                    </div>
                    <div className='list-container'>
                        <ul className='list'>
                            <li>
                                <Link to="/matches">Matches</Link>
                            </li>
                            <li>
                                <Link to="/schedule">Schedule</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;