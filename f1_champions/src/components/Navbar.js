import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem } from 'react-bootstrap';

const MainNav = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <NavItem>
                <a class="navbar-brand" href="#"><NavLink to="/">Home</NavLink></a>
            </NavItem>
        </Navbar>
    )
}

export default MainNav
