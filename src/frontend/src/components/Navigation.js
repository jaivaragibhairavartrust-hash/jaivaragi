import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation({ links }) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Temple</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {links.map((link, index) => (
                        <Nav.Link key={index} href={link.path}>{link.name}</Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
