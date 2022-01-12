import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandDetails,
  getProductByBrand,
} from "../../redux/actions/productActions";
import Product from "../../components/ProductCard";
function BrandDetailsPage({ match, history }) {
  const dispatch = useDispatch();

  const brandDetails = useSelector((state) => state.brandDetails);
  const { brand } = brandDetails;

  const brandProducts = useSelector((state) => state.brandProducts);
  const { product } = brandProducts;

  useEffect(() => {
    dispatch(getBrandDetails(match.params.id));
    dispatch(getProductByBrand(match.params.id));
  }, [dispatch, match]);

  if (!brand) return null;
  if (!product) return null;
  console.log(product, "pppppppppppppppp");
  return (
    <div style={{ marginTop: "100px" }}>
      <div style={{ textAlign: "center", alignItems: "center" }}>
        <img
          style={{
            width: "50%",
            height: "50%",
            textAlign: "center",
            alignItems: "center",
          }}
          src={brand.img}
          alt={brand.name}
        />
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Hind Guntur Semi-bold 600",
            fontSize: "7em",
          }}
        >
          تصفح المزيد من {brand.name}
        </p>
      </div>
      <hr />
      <Row>
        {product.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BrandDetailsPage;
