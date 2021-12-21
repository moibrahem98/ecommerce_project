import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function CategoryNavbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <NavDropdown
              title="ALL CATEGORIES"
              active
              style={{ fontWeight: "bold" }}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/perfume">Perfume</NavDropdown.Item>
              <NavDropdown.Item href="/makeup">Makeup</NavDropdown.Item>
              <NavDropdown.Item href="/bodycare">Body Care</NavDropdown.Item>
              <NavDropdown.Item href="/haircare">Hair Care </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Perfume" id="basic-nav-dropdown">
                <NavDropdown.Item href="/menperfume">Men</NavDropdown.Item>
                <NavDropdown.Item href="/womenperfume">Women </NavDropdown.Item>
                <NavDropdown.Item href="/orientalperfume">
                  Oriental
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Makeup" id="basic-nav-dropdown">
                <NavDropdown.Item href="/foundationmakeup">
                  Foundation
                </NavDropdown.Item>
                <NavDropdown.Item href="/mascaramakeup">
                  Mascara
                </NavDropdown.Item>
                <NavDropdown.Item href="/eyeshadowmakeup">
                  Eye Shadow
                </NavDropdown.Item>
                <NavDropdown.Item href="/highlightermakeup">
                  Highlighter
                </NavDropdown.Item>
                <NavDropdown.Item href="/bronzermakeup">
                  Bronzer
                </NavDropdown.Item>
                <NavDropdown.Item href="/lipglossmakeup">
                  Lip Gloss
                </NavDropdown.Item>
                <NavDropdown.Item href="/rougemakeup">Rouge </NavDropdown.Item>
                <NavDropdown.Item href="/kohlmakeup">Kohl </NavDropdown.Item>
                <NavDropdown.Item href="/makeupremover">
                  Makeup Remover{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Body Care" id="basic-nav-dropdown">
                <NavDropdown.Item href="/creambodycare">Cream</NavDropdown.Item>
                <NavDropdown.Item href="/bodylotionbodycare">
                  Body Lotion{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/bodymistbodycare">
                  Body Mist
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Hair Care" id="basic-nav-dropdown">
                <NavDropdown.Item href="/shampohaircare">
                  Shmpo
                </NavDropdown.Item>
                <NavDropdown.Item href="/serumshaircare">
                  Serums{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/conditionerhaircare">
                  Conditioner{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/conditionercreamhaircare">
                  Conditioner Cream{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/proteinandcreatinehaircare">
                  Protein And Creatine{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/oilshaircare">Oils </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CategoryNavbar;
