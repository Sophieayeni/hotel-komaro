import React from 'react';
import Logo from "../../Assets/images/HOTEL LOGO.png";
import { Nav, Navbar, NavLink, NavbarBrand } from 'react-bootstrap'

function Navigationbar() {
    return (
        <div>
            <Navbar className="navbar-custom" collapseOnSelect
                expand="lg"
                fixed="top">
                <NavbarBrand href="#home">
                    <img src={Logo} height="50px" alt="logo" className='mx-5' />{" "}
                </NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ms-auto" >
                        <NavLink href="/" className="nav-link mx-5 ">Home</NavLink>

                        <NavLink href="/rooms-and-suites" className="nav-link mx-5 ">Rooms & Suites</NavLink>

                        <NavLink href="/dining-and-nightlife" className="nav-link mx-5 ">Dining & Nightlife</NavLink>

                        <NavLink href="#contact-us" className="nav-link mx-5 ">Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigationbar