import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../src/images/logo.png';
import Search from '../src/images/search.png';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">

                    
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active"  aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex search">
                            <input className="form-control" type="search" placeholder="Search here" aria-label="Search" />
                            <button className="btn" type="submit"><img src={Search} /></button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>
                </div>
            </div>
        </>
    );

};







export default Navbar;