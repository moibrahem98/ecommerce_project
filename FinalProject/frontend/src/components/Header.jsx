import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import logo from "../brand.jpg";
import SearchBox from "./SearchBox";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 30;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        collapseOnSelect
        fixed="top"
        className="big_head"
        style={{
          transition: ".5s ease",
          backgroundColor: navBackground ? "gray" : "transparent",
          borderBottom: "2px solid #ccc",
          zIndex: "1500",
          boxShadow: "0px 11px 15px -4px rgba(0,0,0,0.75);",
        }}
      >
        <Container className="align-items-center">
          <LinkContainer to="/" className="justify-content-start">
            <Navbar.Brand className="brand justify-content-start">
              <img src={logo} alt="Logo" style={{ borderRadius: "8px" }} />
            </Navbar.Brand>
          </LinkContainer>
          <SearchBox className="justify-content-end" />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Categoressssssssssss */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
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

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto justify-content-end main_icons">
              <LinkContainer to="/" id="cartLink">
                <Nav.Link>
                  <i className="fas fa-globe-africa mt-2"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart mt-1"></i>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown
                  title={<i class="fas fa-user"></i>}
                  id="username"
                  className="justify-content-end font-weight-bold mt-1"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/myorders">
                    <NavDropdown.Item>My Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/update">
                    <NavDropdown.Item>Update Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown
                  title={<i class="fas fa-user-shield"></i>}
                  id="adminmenue"
                  className="mt-1"
                >
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/returnslist">
                    <NavDropdown.Item>Returns</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
