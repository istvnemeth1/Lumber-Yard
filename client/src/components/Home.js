import React from 'react';
import Header from './Header.js';

const Home = props => {
    return (
        <>
            <Header/>
            <h1>Home Pityukaaaaa akar mi mas</h1>
            <h1>{props.data}</h1>
        </>
    );
}

export default Home;