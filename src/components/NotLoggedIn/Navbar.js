import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from 'react-router-dom';
import "../Player/Navbar.css"

const NavBarLoggedOut = (props) => {
    const endpoint = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_PROD_AUTHENDPOINT : process.env.REACT_APP_DEV_AUTHENDPOINT
    return (
        <div>
            <Navbar className="navbar">
                <NavbarBrand href="/" className="brand mr-auto"><h1>Tune<span className="brand-two">age</span></h1></NavbarBrand>
                <Link className="btn btn--loginApp-link" to="/account">VIEW PLANS</Link>
                <a className="btn btn--loginApp-link" href={`${endpoint}/auth/spotify`}
                >LOGIN 
                </a>
            </Navbar>
        </div>
    );
};

export default NavBarLoggedOut;