import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
// import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar className="nav-bar " expand="lg">
        <Container>
          <Navbar.Brand className="d-flex">
            <h4>ANJISH GURUNG</h4>
            <span className="title-a">
              {" "}
              {" { "} WEB DEVELOPER{" } "}
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="ms-auto gap-2">
              <Nav.Link className="bars" href="#home">
                HOME <i className="fa-solid fa-house-user"></i>
              </Nav.Link>
              <Nav.Link className="bars" href="#link">
                ABOUT ME <i class="fa-solid fa-user-tie"></i>
              </Nav.Link>
              <Nav.Link className="bars" href="#link">
                SKILLS <i class="fa-solid fa-computer"></i>
              </Nav.Link>
              <Nav.Link className="bars" href="#link">
                PROJECTS <i class="fa-solid fa-briefcase"></i>
              </Nav.Link>
              <Nav.Link className="bars" href="#link">
                CONTACT ME <i class="fa-solid fa-envelope"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
