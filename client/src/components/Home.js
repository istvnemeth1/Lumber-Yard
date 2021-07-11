import React from 'react';
import Village from './Menu/Village.js';
import Navbar from './Navbar.js';

const Home = props => {
    return (
        <>
            <Navbar/>
            <div class="main">
                {/* Here comes the chosen menu */}
                {/* Village Proba */}
                <Village />
            </div>
            <h1>{props.data} ezt telorol pusholtam</h1>
        </>
    );
}

export default Home;