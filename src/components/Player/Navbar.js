import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <Navbar className="navbar">
                <NavbarBrand href="/" className="brand mr-auto"><h1>Tune<span className="brand-two">age</span></h1></NavbarBrand>
                <Link className="btn btn--loginApp-link" to="/account">ACCOUNT SETTINGS</Link>
                <div className="btn btn--loginApp-link" onClick={(e) => props.handleLogOut(e, props)}>LOGOUT</div>
            </Navbar>
        </div>
    );
};

export default NavBar;