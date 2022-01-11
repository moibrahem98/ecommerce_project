import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByOffers,
  listOffers,
} from "../../redux/actions/productActions";
import { convertToObject } from "typescript";

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
    <div>
      {offers.map((offer) => (
        <p>
          {offer.id === match.params.id && (
            <p key={offer.id}>
              <h2 style={{ fontFamily: "Hind Guntur " }}>
                Discount {offer.value * 100}%
              </h2>
              <hr></hr>
            </p>
          )}
        </p>
      ))}
      {product.length === 0 ? (
        <div className="py-5 text-center mx-auto">
          <a href="/" className="btn btn_color ">
            الرجوع للصفحه الرئيسيه
          </a>
        </div>
      ) : (
        <Container>
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
