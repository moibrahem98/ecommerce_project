import React from "react";
import { Container, Navbar, Row, Nav } from "react-bootstrap";
export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Beauty Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Products</Nav.Link>
              <Nav.Link href="#link">Categories</Nav.Link>
              <Nav.Link href="#link">Offers</Nav.Link>

              <Row></Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav
        className="navbar fixed-top navbar-light bg-light pb-3"
        // style={{ backgroundColor: "#ffffff" }}
      >
        <a className="navbar-brand ms-5" href="/">
          Brand Name
        </a>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link cat" href="/">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link cat" href="/">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link cat" href="/">
              Offers
            </a>
          </li>
        </ul>
        <ul className="nav justify-content-right me-5 gap-4">
          <li className="nav-item">
            <i className="fas fa-search " style={{ fontsize: "1.5rem" }}></i>
          </li>
          <li className="nav-item">
            <i className="fas fa-user-circle"></i>
          </li>
          <li className="nav-item">
            <i className="fas fa-shopping-bag"></i>
          </li>
        </ul>
      </nav> */}
    </>
  );
};
