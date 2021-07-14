import React from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div id="house" class="card">
            <i class="bi bi-house-door"></i>
            <div class="description">
                <h1>Shed</h1>
                <p>Here you can sleep</p>
                <p>Storage space: 4</p>
            </div>
                <div class="button-right">
                    <NavLink to="/shed" style={{ textDecoration: 'none', color: 'black' }}>
                        <i class="bi bi-caret-right"></i>
                    </NavLink>
                </div>
        </div>
        <div id="house" class="card">
            <i class="bi bi-border"></i>
            <div class="description">
                <h1>Garden</h1>
                <p>You can plant here</p>
                <p>Planting space: 5</p>
            </div>
            <div class="button-right">
                <i class="bi bi-caret-right"></i>
            </div>
        </div>
        </>
    );
};

export default Home;