import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HashLink as Link} from 'react-router-hash-link';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">RAKIB</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="#services" smooth>Services</Nav.Link>
            <Nav.Link as={Link}  to="#projects" smooth>Projects</Nav.Link>
            <Nav.Link as={Link} to="#blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Navigation;