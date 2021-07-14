import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar.js';

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="main">
            <div id="house" className="card">
                <i className="bi bi-house-door"></i>
                <div className="description">
                    <h1>Shed</h1>
                    <p>Here you can sleep</p>
                    <p>Storage space: 4</p>
                </div>
                    <div className="button-right">
                        <NavLink to="/shed" style={{ textDecoration: 'none', color: 'black' }}>
                            <i className="bi bi-caret-right"></i>
                        </NavLink>
                    </div>
            </div>
            <div id="house" className="card">
                <i className="bi bi-border"></i>
                <div className="description">
                    <h1>Garden</h1>
                    <p>You can plant here</p>
                    <p>Planting space: 5</p>
                </div>
                <div className="button-right">
                    <i className="bi bi-caret-right"></i>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;