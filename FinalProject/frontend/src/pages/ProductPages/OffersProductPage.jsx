import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByOffers,
  listOffers,
} from "../../redux/actions/productActions";

function OffersProductPage({ match, history }) {
  const dispatch = useDispatch();

  const offersProducts = useSelector((state) => state.offersProducts);
  const { product } = offersProducts;
  const offersList = useSelector((state) => state.offersList);
  const { offers } = offersList;
  useEffect(() => {
    dispatch(listOffers());
    dispatch(getProductByOffers(match.params.id));
  }, [dispatch, match]);
  if (!product) return null;
  if (!offers) return null;

  return (
    <div style={{ marginTop: "200px" }}>
      {product.length === 0 ? (
        <div className="py-5 text-center mx-auto">
          <a href="/" className="btn btn_color ">
            الرجوع للصفحه الرئيسيه
          </a>
        </div>
      ) : (
        <Container>
          <p style={{ textAlign: "center" }}>
            {offers.map((offer) => (
              <p style={{ textAlign: "center" }}>
                {offer.id == match.params.id && (
                  <p>
                    <h2 style={{ fontFamily: "Hind Guntur " }}>
                      Discounts at {offer.value * 100}%
                    </h2>
                    <hr></hr>
                  </p>
                )}
              </p>
            ))}
          </p>
          <Row>
            {product.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default OffersProductPage;
