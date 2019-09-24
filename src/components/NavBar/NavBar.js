import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        className="navbar"
        variant="dark"
        collapseOnSelect
        sticky="top"
        expand="lg"
      >
        <Navbar.Brand href="#">
          Gabriel <span>\></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#top">/>Top</Nav.Link>
            <Nav.Link href="#projects">/>Projects</Nav.Link>
            <Nav.Link href="#contact">/>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
