import React from 'react';
import Navbar from './Navbar.js';

const Index = props => {
    return (
        <>
        <Navbar />
        <div class="main">
            {props.data}
        </div>
        </>
    )
};

export default Index;