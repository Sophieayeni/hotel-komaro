import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../Assets/images/HOTEL LOGO.png";
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

function Navigationbar() {
    return (
        <Navbar className="navbar-custom" collapseOnSelect expand="lg" fixed="top">
            <Navbar.Brand href="#home">
                <img src={Logo} height="50px" alt="logo" className="mx-5" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `nav-link mx-5 ${isActive ? 'active-link' : ''}`}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/rooms-and-suites"
                        className={({ isActive }) => `nav-link mx-5 ${isActive ? 'active-link' : ''}`}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Rooms & Suites
                    </NavLink>

                    <NavLink
                        to="/dining-and-nightlife"
                        className={({ isActive }) => `nav-link mx-5 ${isActive ? 'active-link' : ''}`}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Dining & Nightlife
                    </NavLink>

                    {/* Contact Us link */}
                    <HashLink
                        smooth
                        to="/#contact-us"
                        className="nav-link mx-5"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    >
                        Contact Us
                    </HashLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;
