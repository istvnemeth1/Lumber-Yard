import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar d-flex justify-content-center">
            <NavLink to='/todo' style={{ textDecoration: 'none', color: 'black' }}>
            <div className="todo mx-3" role="navigation">
                <i className="bi bi-clipboard-check"></i>
            </div>
            </NavLink>
            <NavLink to='/home' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="home mx-3" role="navigation">
                    <i className="bi bi-house-door"></i>
                </div>
            </NavLink>
            <NavLink to='/menu' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="menu mx-3" role="navigation">
                    <i className="bi bi-signpost-split"></i>
                </div>
            </NavLink>
            <NavLink to='/notification' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="notification mx-3" role="navigation">
                    <i className="bi bi-bell"></i>
                </div>
            </NavLink>
            <NavLink to='/settings' style={{ textDecoration: 'none', color: 'black' }}>
                <div className="setings mx-3" role="navigation">
                    <i className="bi bi-person-badge"></i>
                </div>
            </NavLink>
            <div className="position-absolute start-0 ms-5">
                <i class="bi bi-box-arrow-in-right" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i>
            </div>
            <div className="position-absolute d-flex end-0">
                <div className="cash">
                    <i className="bi bi-cash mx-2">50</i>
                </div>
                <div className="gem">
                    <i className="bi bi-gem mx-2">50</i>
                </div>
                <div className="coin">
                    <i className="bi bi-piggy-bank mx-2 me-5">50</i>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Start your amazing wood journey</h5><br></br>
            
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <h4>The best wood cutting adventure <b>Lumber Yard</b></h4>
            <hr></hr>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Build your empire</button>
            </form>
            </div>
            </div>
        </div>
        
    );
};

export default Navbar;