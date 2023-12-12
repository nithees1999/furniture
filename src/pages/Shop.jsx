import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";
import { useEffect, useState } from "react";

const Shop = () => {

  const [data, setData] = useState(products)
  useEffect(() => {
    const filteredProducts = products.filter((item) => item.category === "chair");
    setData(filteredProducts);
  });


  return (

    <section className="featured_products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section__title">Featured Product</h2>

          </Col>
          <ProductList data={data} />
        </Row>
      </Container>

    </section>


  );
};

export default Shop;
