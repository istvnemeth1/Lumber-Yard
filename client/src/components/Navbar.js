import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <navbar class="sticky center">
            <NavLink to='/todo'>
            <div class="todo">
                <i class="bi bi-clipboard-check"></i>
            </div>
            </NavLink>
            <NavLink to='/home'>
                <div class="home">
                    <i class="bi bi-house-door"></i>
                </div>
            </NavLink>
            <NavLink to='/menu'>
                <div class="menu">
                    <i class="bi bi-signpost-split"></i>
                </div>
            </NavLink>
            <NavLink to='/notification'>
                <div class="notification">
                    <i class="bi bi-bell"></i>
                </div>
            </NavLink>
            <NavLink to='/settings'>
                <div class="setings">
                    <i class="bi bi-person-badge"></i>
                </div>
            </NavLink>
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