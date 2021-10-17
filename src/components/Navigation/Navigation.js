import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/home" className="nav-link">
            <Navbar.Brand>Navbar</Navbar.Brand>
          </Link>
          <Nav className="mx-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/service" className="nav-link">
              Service
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
