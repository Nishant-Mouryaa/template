// File: Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const MyNavbar = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Navbar
      expand="md"
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      className="shadow-sm"
    >
      <Container>
        {/* =========================
            BRAND / LOGO
        ========================== */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="me-2"
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          />
          <span className="fw-bold">MyPortfolio</span>
        </Navbar.Brand>

        {/* Toggle Button (Hamburger) for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* =========================
                NAVIGATION LINKS
            ========================== */}
            <Nav.Link as={Link} to="/" className="me-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="me-3">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="me-3">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="me-3">
              Contact
            </Nav.Link>

            {/* =========================
                DARK MODE TOGGLE
            ========================== */}
            <Button
              variant={darkMode ? 'outline-light' : 'outline-dark'}
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
 
