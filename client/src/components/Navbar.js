import React from 'react'



const Navbar = () => {
    // const menuButton = document.querySelector('.todo');
    // menuButton.addEventListener('click', () => {
    //     if (this.)
    // })
    return (
        <navbar class="sticky center">
            <div class="todo">
                <i class="bi bi-clipboard-check"></i>
            </div>
            <div class="home">
                <i class="bi bi-house-door"></i>
            </div>
            <div class="menu">
                <i class="bi bi-signpost-split"></i>
            </div>
            <div class="notification">
                <i class="bi bi-bell"></i>
            </div>
            <div class="setings">
                <i class="bi bi-person-badge"></i>
            </div>
            <div class="right">
                <div class="cash">
                    <i class="bi bi-cash"></i>
                </div>
                <div class="gem">
                    <i class="bi bi-gem"></i>
                </div>
                <div class="coin">
                    <i class="bi bi-piggy-bank"></i>
                </div>
            </div>
        </navbar>
    );
};

export default Navbar;