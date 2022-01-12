import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/userActions";
import logo from "../images/brand.png";
import { listCategories } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

function Header() {
  const categoriesList = useSelector((state) => state.categoriesList);
  const { categories } = categoriesList;

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
    dispatch(listCategories());

    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  if (!categories) return null;

  return (
    <header style={{ marginBottom: "75px", alignItems: "center" }}>
      <Navbar
        expand="lg"
        collapseOnSelect
        fixed="top"
        style={{
          transition: ".5s ease",
          backgroundColor: navBackground ? "#fff" : "transparent",
          zIndex: "1500",
          color: "#232323",
        }}
        className="hea"
      >
        <Container fluid className="navbar align-items-center">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                className="logo_img"
                alt="Logo"
                style={{ height: "33px" }}
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              {categories.map((category) => (
                <LinkContainer to={`/categoryproducts/${category.id}`}>
                  <Nav.Link id="basic-nav-dropdown">{category.name}</Nav.Link>
                </LinkContainer>
              ))}
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end bottom_nav"
          >
            <Nav className="main_icons ">
              <LinkContainer to="/search">
                <Nav.Link>
                  <i className="far fa-search icon_size mr-4"></i>{" "}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fal fa-cart-plus icon_size mx-2"></i>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <>
                  <LinkContainer to="/userpanal">
                    <Nav.Link>
                      <i className="fal fa-user icon_size mx-2"></i>
                    </Nav.Link>
                  </LinkContainer>
                  <Link onClick={logoutHandler}>
                    <Nav.Link>
                      <i className="far fa-sign-out-alt icon_size mx-2"></i>
                    </Nav.Link>
                  </Link>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fal fa-user icon_size mx-2"></i>
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <LinkContainer to="/admin/adminpanal">
                  <Nav.Link>
                    <i className="fal fa-user-shield icon_size"></i>{" "}
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
