import React from 'react';
import Navbar from '../Navbar.js';

const Village = () => {
    
    return (
        <>
        <Navbar />
        <div className="main">
            <div id="shop" className="card">
                <i className="bi bi-shop"></i>
                <div className="description">
                    <h1>B&Ku</h1>
                    <p>You've got more things for higher price eg:</p>
                    <p>Tools, Materials, Supply</p>
                </div>
                <div className="button-right">
                    <i className="bi bi-caret-right"></i>
                </div>
            </div>
            <div id="shop" className="card">
                <i className="bi bi-shop-window"></i>
                <div className="description">
                    <h1>Local shop</h1>
                    <p>You've got less things for lower price</p>
                </div>
                <div className="button-right">
                    <i className="bi bi-caret-right"></i>
                </div>
            </div>
            <div id="bank" className="card">
                <i className="bi bi-bank"></i>
                <div className="description">
                    <h1>Bank</h1>
                    <p>Get Loan</p>
                </div>
                <div className="button-right">
                    <i className="bi bi-caret-right"></i>
                </div>
            </div>
            <div id="forest" className="card">
                <i className="bi bi-tree"></i>
                <div className="description">
                    <h1>Forest</h1>
                    <p>Buy bigger plots to have more trees</p>
                </div>
                <div className="button-right">
                    <i className="bi bi-caret-right"></i>
                </div>
            </div>
            <div id="home" className="card">
                <i className="bi bi-house-door"></i>
                <div className="description">
                    <h1>Home</h1>
                </div>
                <div className="button-right">
                    <i className="bi bi-caret-right"></i>
                </div>
            </div>
        </div>
        </>
    );
};

export default Village;