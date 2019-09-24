import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        className="navbar"
        variant="dark"
        collapseOnSelect
        fixed="top"
        expand="lg"
      >
        <Navbar.Brand href="#top">
          <span>--></span>
          <span></span>
          <span></span>
          <span></span>
          />Gabriel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#top">
              <span>/></span>
              <span></span>
              <span></span>
              <span></span>
              />Top
            </Nav.Link>
            <Nav.Link href="#projects">
              <span>/></span>
              <span></span>
              <span></span>
              <span></span>
              />Projects
            </Nav.Link>
            <Nav.Link href="#contact">
              <span>/></span>
              <span></span>
              <span></span>
              <span></span>
              />Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
