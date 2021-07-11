import React from 'react';
import Navbar from './Navbar.js';

const Navbar = props => {
    return (
        <>
            <Navbar/>
            <h1>Home</h1>
            <h1>{props.data}</h1>
        </>
    );
}

export default Home;