import React from 'react';
import Village from './Menu/Village.js';
import Navbar from './Navbar.js';

const Index = props => {
    return (
        <>
            <Navbar/>
            <div class="main">
                {/* Here comes the chosen menu */}
                {/* Village Proba */}
                <Village />
            </div>
            <h1>{props.data}</h1>
        </>
    );
}

export default Index;