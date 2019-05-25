/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../../shared/Header/HomeHeader';

const Welcome = () => {
    return (
        <Fragment>
            <div className="overlay">
                <h1>Vote Right</h1>
            </div>

            <div className="container">
                <HomeHeader />

                <div className="page_header">
                    <section className="intro">
                        <h1>Make your vote count</h1>
                        <p className="subhead">Voting is not our right, it's our power.</p>
                        <Link to="/auth/signin" className="cta_link">Sign Up</Link>
                    </section>
                    <section>
                        <img src="https://despeauxz.github.io/Politico/ui/assets/img/undraw.png" alt="undraw icon" />
                    </section>
                </div>
            </div>

            <div className="blue-container">
                <div className="container">
                    <h2>HOW TO VOTE</h2>
                    <ul>
                        <li>
                            <p className="text-md">1</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium ipsam? Alias dolorem fuga eligendi, cum odio recusandae laboriosam</p>
                        </li>
                        <li>
                            <p className="text-md">2</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium ipsam? Alias dolorem fuga eligendi,
                        cum odio recusandae laboriosam</p>
                        </li>
                        <li>
                            <p className="text-md">3</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium ipsam? Alias dolorem fuga eligendi,
                        cum odio recusandae laboriosam</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="gray-container">
                <div className="container">
                    <ul className="slider-container" id="slider">
                        <li className="slide">
                            <figure>
                                <blockquote>
                            We do not have government by the majority, We have government by the majority who participate
                                </blockquote>
                                <figcaption>- Thomas Jefferson</figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container enterprise">
                <h2>Get your voting ID now!</h2>
                <p className="cta">Get Started</p>
            </div>

            <footer>
                <div className="footer-container">
                    <div className="container">
                        <p className="desc">Designed by Malik Godwin Onimisi</p>
                        <p>Andela Bootcamp Challenge, Cycle 41</p>
                        <ul className="footer-links">
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

export default Welcome;
