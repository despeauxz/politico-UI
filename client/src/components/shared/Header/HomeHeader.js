/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@base/img/logo2.png';
import Ham from '@base/img/ham.svg';
import Exit from '@base/img/exit.svg';


class HomeHeader extends Component {
    render() {
        return (
            <header className="home-landing">
                <Link to="/" className="">
                    <img src={Logo} alt="logo" className="logo" />
                </Link>

                <nav>
                    <a href="#" className="hide-desktop">
                        <img src={Ham} alt="toggle menu" className="menu" id="menu" />
                    </a>
                    <ul className="show-desktop hide-mobile" id="nav">
                        <li id="exit" className="exit-btn hide-desktop exit">
                            <img src={Exit} alt="Exit toggle" />
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Policy</Link></li>
                        <li><Link to="/auth/login">Login</Link></li>
                        <li><Link to="/auth/signup">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HomeHeader;
