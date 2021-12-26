import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, L } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import logo from "../images/brand.png";
// import SearchBox from "./SearchBox";
import { listCategories, listSubCategories } from "../actions/productActions";
import { Link } from "react-router-dom";
// import DarkMode from "../DarkMode";

function Header() {
  const categoriesList = useSelector((state) => state.categoriesList);
  const { categories } = categoriesList;
  const subcategoriesList = useSelector((state) => state.subcategoriesList);
  const {
    loading: subcategoriesLoading,
    error: subcategoriesError,
    subcategories,
  } = subcategoriesList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    dispatch(listCategories());
    dispatch(listSubCategories());

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
  }, []);
  if (!categories) return null;
  console.log(categories, "category");
  console.log(subcategories, "subbbbbbbbbbcategory");
  if (!subcategories) return null;

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
            className="justify-content-center"
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
            {/* <SearchBox /> */}

            <Nav className="main_icons">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fal fa-cart-plus icon_size"></i>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <>
                  <LinkContainer to="/userpanal">
                    <Nav.Link>
                      <i className="fal fa-user icon_size"></i>
                    </Nav.Link>
                  </LinkContainer>
                  <Link onClick={logoutHandler}>
                    <Nav.Link>
                      <i className="far fa-sign-out-alt icon_size"></i>
                    </Nav.Link>
                  </Link>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fal fa-user icon_size"></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {/* <DarkMode /> */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown
                  className="dropdown-toggle-split"
                  title={<i className="fal fa-user-shield icon_size"></i>}
                  id="adminmenue"
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

              {/* <DarkMode /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
