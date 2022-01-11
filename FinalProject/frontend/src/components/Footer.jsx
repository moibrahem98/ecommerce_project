import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../redux/actions/productActions";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";

export default function App() {
  const dispatch = useDispatch();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { categories } = categoriesList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  if (!categories) return null;
  return (
    <footer className="text-lg-left foot">
      <Container>
        <Row className="text-right mt-3">
          <Col lg="3" md="6" className="mb-4 mb-md-0">
            <h3 className="text-uppercase ">الأقسام</h3>

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
            <h3>العنوان</h3>
            <address>
              مصر-المحله الكبرى شارع جراج الحناوي خلف مطعم رستو امام فيلا الشامي
            </address>
            <div className="h5">خدمه العملاء</div>
            <i className="fas fa-phone mb-2 blackiconcolor"></i> +201150508507
            <br />
            <i className="fas fa-mail-bulk blackiconcolor"></i>{" "}
            atif_aljamal@hotmail.com
          </Col>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <div className="d-flex flex-row-reverse">
              <h3 className="text-uppercase">Mid Night</h3>
              <img src={logo} alt="logo" />
            </div>
            <p>
              تمتاز منتجاتنا بالطابع المنفرد من حيث التصميم و الجودة، نحن
              ملتزمون بتقديم منتجاتٍ و خدماتٍ تلبّي رغبات عملائنا
            </p>
            <Link className="contact_link blackiconcolor" to="/contactus">
              تواصل معنا
            </Link>

            <ul className="list-unstyled mt-2">
              <li>
                <a
                  href="https://www.facebook.com/Mid4Night"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-2x fa-facebook blackiconcolor"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=2001150508507&app=facebook&entry_point=page_cta&fbclid=IwAR0PGOyWWnceZltN1I_tgeb5n1NoisWf9qfItSdoHcvfUAqAbrIE0zLg6u8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="face-icon"
                >
                  <i className="fab fa-2x fa-whatsapp blackiconcolor"></i>
                </a>
                <a
                  href="https://www.instagram.com/midnight6088"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-2x fa-instagram blackiconcolor"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <hr />
            <p className="text-center">
              MidNight Created By ITI Team All Rights @ Reserved 2022
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
