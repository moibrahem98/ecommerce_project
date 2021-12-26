import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/productActions";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { categories } = categoriesList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  if (!categories) return null;
  return (
    <footer className="text-lg-left pt-5">
      <Container>
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h3 className="text-uppercase">Mid Night</h3>

            <p>
              mid night shop Our products are unique in terms of design and
              quality. We are committed to providing products and services that
              meet the needs of our customers
            </p>
            <Link className="contact_link blackiconcolor" to="/contactus">
              Contact Us
            </Link>

            <ul className="list-unstyled mt-2">
              <li>
                <Link to="https://www.facebook.com/Mid4Night">
                  <i className="fab fa-2x fa-facebook blackiconcolor"></i>
                </Link>
                <Link
                  to="https://api.whatsapp.com/send?phone=2001150508507&app=facebook&entry_point=page_cta&fbclid=IwAR0PGOyWWnceZltN1I_tgeb5n1NoisWf9qfItSdoHcvfUAqAbrIE0zLg6u8"
                  className="face-icon"
                >
                  <i className="fab fa-2x fa-whatsapp blackiconcolor"></i>
                </Link>
                <Link to="https://www.instagram.com/midnight6088">
                  <i className="fab fa-2x fa-instagram blackiconcolor"></i>
                </Link>
              </li>
            </ul>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h3 className="text-uppercase ">Products</h3>

            <ul className="list-unstyled mb-0">
              {categories.map((category) => (
                <li
                  style={{
                    color: "black",
                    margin: "5px",
                    padding: "5px",
                  }}
                >
                  <Link
                    style={{
                      color: "black",
                    }}
                    to={`/categoryproducts/${category.id}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h3>Address</h3>
            <address>
              Egypt-Cairo-ElMahlla Elkubra
              <br />
              Shokri Next To Garag el henawy
            </address>
            <div className="h5">Customer Care</div>
            <i className="fas fa-phone mb-2 blackiconcolor"></i> +201150508507
            <br />
            <i className="fas fa-mail-bulk blackiconcolor"></i>{" "}
            atif_aljamal@hotmail.com
          </Col>
          <Col>
            <hr />
            <p className="text-center">
              MidnNight Created By iti Team All Right @ Reseved 2022
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
