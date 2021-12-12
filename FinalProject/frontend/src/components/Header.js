import React from "react";
import { Nav,NavDropdown, Navbar,Container} from 'react-bootstrap'
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/card"><i className="fa fa-shopping-cart"></i>Card</Nav.Link>
              <Nav.Link href="/login"> <i className='fa fa-user'></i>login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </header>
  );
}

export default Header;
