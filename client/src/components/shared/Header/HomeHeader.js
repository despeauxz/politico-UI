/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class HomeHeader extends Component {
    render() {
        return (
            <header className="home-landing">
                <a href="i" className="">
                    <img src="https://despeauxz.github.io/Politico/ui/assets/img/logo2.png" alt="logo" className="logo" />
                </a>

                <nav>
                    <a href="#" className="hide-desktop">
                        <img src="https://despeauxz.github.io/Politico/ui/assets/img/ham.svg" alt="toggle menu" className="menu" id="menu" />
                    </a>
                    <ul className="show-desktop hide-mobile" id="nav">
                        <li id="exit" className="exit-btn hide-desktop exit">
                            <img src="https://despeauxz.github.io/Politico/ui/assets/img/exit.svg" alt="Exit toggle" />
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
