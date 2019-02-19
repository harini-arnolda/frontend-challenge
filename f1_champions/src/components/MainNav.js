import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem } from 'react-bootstrap';

const MainNav = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <NavItem>
                <NavLink className="navbar-brand" to="/">Home</NavLink>
            </NavItem>
        </Navbar>
    )
}

export default MainNav
