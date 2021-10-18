import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const {user, handleLogout}= useAuth()
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
            <Link to="/about" className="nav-link">
              About
            </Link>
            {user.email? 
            
            <button onClick={handleLogout} className="btn btn-danger">Logout</button> :<Link to="/login" className="nav-link">
              Login
            </Link>}
           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
