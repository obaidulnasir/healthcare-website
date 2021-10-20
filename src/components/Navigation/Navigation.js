import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const { user, handleLogout } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Link to="/home" className="nav-link">
            <Navbar.Brand>PetsCare</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/service" className="nav-link">
                Service
              </Link>
              <Link to="/doctors" className="nav-link">
                Doctors
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              {user.email ? (
                <div>
                  {" "}
                  <span className="text-white">
                    {user.displayName || user.email}
                  </span>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout <i class="bi bi-box-arrow-right"></i>
                  </button>{" "}
                </div>
              ) : (
                <Link to="/login" className="nav-link bg-success">
                  <i class="bi bi-box-arrow-in-left"></i> Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
