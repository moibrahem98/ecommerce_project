// import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="pt-3">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Beauty Shop</h6>
                <p>This is our online store for or stores in El-Mahla.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Perfume
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Make Up
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Skin Care
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Hair Routine
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">More</h6>
                <p>
                  <a href="/" className="text-reset">
                    about us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    contact us
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Address</h6>
                <p>
                  <i className="fas fa-map-marker-check"></i> El-Mahala
                  El-Kobra, El-Gharbia, Egypt
                </p>
                <p>
                  <i className="fas fa-envelope-open "></i>
                  fivedevs@fivedevs.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> 01026337025
                </p>
                <div>
                  <a href="/" className="me-4 text-reset">
                    <i className="fa fa-facebook "></i>
                  </a>
                  <a href="/" className="me-4 text-reset">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/" className="me-4 text-reset">
                    <i className="fa fa-google"></i>
                  </a>
                  <a href="/" className="me-4 text-reset">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/">
            FiveDevs.com{" "}
          </a>
        </div>
      </footer>
    </>
  );
};
