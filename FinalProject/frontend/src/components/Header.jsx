import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import logo from "../images/brand.png";
import SearchBox from "./SearchBox";
import { listCategories, listSubCategories } from "../actions/productActions";

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
  if (!categories) return null;
  console.log(categories, "category");
  console.log(subcategories, "subbbbbbbbbbcategory");
  if (!subcategories) return null;

  return (
    <header className="mb-5">
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
              <img
                src={logo}
                alt="Logo"
                style={{ borderRadius: "8px", height: "34px" }}
              />
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
              {categories.map((category) => (
                <div>
                  <NavDropdown title={category.name} id="basic-nav-dropdown">
                    {subcategories.map((subcategory) => (
                      <p>
                        {subcategory.category === subcategory.category1.id && (
                          <NavDropdown.Item>
                            <strong>{subcategory.name}</strong>
                          </NavDropdown.Item>
                        )}
                      </p>
                    ))}
                    {/* {subcategories.map((subcategory) => (
                      // {subcategory.category == subcategory.category1.id &&()}

                      <NavDropdown.Item>{subcategory.name}</NavDropdown.Item>
                    ))} */}
                  </NavDropdown>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
          {/* <LinkContainer to={`/categoryproducts/${category.id}`}>
                    <Button variant="light" className="btn-sm btn_color">
                      Details{" "}
                    </Button>
                  </LinkContainer> */}

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
                    <i className="fas fa-user mt-2">Login</i>
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
