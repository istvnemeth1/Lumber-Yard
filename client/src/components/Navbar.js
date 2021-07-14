import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="sticky center navbar">
            <NavLink to='/todo' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="todo">
                <i className="bi bi-clipboard-check"></i>
            </div>
            </NavLink>
            <NavLink to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="home">
                    <i className="bi bi-house-door"></i>
                </div>
            </NavLink>
            <NavLink to='/menu' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menu">
                    <i className="bi bi-signpost-split"></i>
                </div>
            </NavLink>
            <NavLink to='/notification' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="notification">
                    <i className="bi bi-bell"></i>
                </div>
            </NavLink>
            <NavLink to='/settings' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="setings">
                    <i className="bi bi-person-badge"></i>
                </div>
            </NavLink>
            <div className="right">
                <div className="cash">
                    <i className="bi bi-cash"></i>
                </div>
                <div className="gem">
                    <i className="bi bi-gem"></i>
                </div>
                <div className="coin">
                    <i className="bi bi-piggy-bank"></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;