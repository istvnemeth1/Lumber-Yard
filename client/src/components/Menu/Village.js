import React from 'react';

const Village = () => {
    return (
        <>
        <div id="shop" class="card">
            <i class="bi bi-shop"></i>
            <div class="description">
                <h1>B&Q</h1>
                <p>You've got more things for higher price eg:</p>
                <p>Tools, Materials, Supply</p>
            </div>
            <div class="button-right">
                <i class="bi bi-caret-right"></i>
            </div>
        </div>
        <div id="shop" class="card">
            <i class="bi bi-shop-window"></i>
            <div class="description">
                <h1>Local shop</h1>
                <p>You've got less things for lower price</p>
            </div>
            <div class="button-right">
                <i class="bi bi-caret-right"></i>
            </div>
        </div>
        <div id="bank" class="card">
            <i class="bi bi-bank"></i>
            <div class="description">
                <h1>Bank</h1>
                <p>Get Loan</p>
            </div>
            <div class="button-right">
                <i class="bi bi-caret-right"></i>
            </div>
        </div>
        <div id="forest" class="card">
            <i class="bi bi-tree"></i>
            <div class="description">
                <h1>Forest</h1>
                <p>Buy bigger plots to have more trees</p>
            </div>
            <div class="button-right">
                <i class="bi bi-caret-right"></i>
            </div>
        </div>
        <div id="home" class="card">
            <i class="bi bi-house-door"></i>
            <div class="description">
                <h1>Home</h1>
            </div>
            <div class="button-right">
                <i class="bi bi-caret-right"></i>
            </div>
        </div>
        </>
    );
};

export default Village;