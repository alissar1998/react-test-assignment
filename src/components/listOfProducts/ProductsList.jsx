import { useState, useEffect } from "react";
import axios from "axios";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "../productCard/ProductCard";
import SimpleNavbar from "../Navbar/SimpleNavbar";
export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    await axios
      .get("https://technical.test.blue-tech.ae/public/api/products")
      .then(({ data }) => {
        console.log(data.data);
        setProducts(data.data);
      })
      .catch(({ response: { data } }) => console.log(data.message));
  };
  return (
    <>
      <SimpleNavbar />
      <main className="main">
        <Row xs={1} sm={2} md={3} lg={4} className="g-2">
          {products.length > 0 &&
            products.map((row, key) => (
              <Col key={key} style={{ padding: "2rem" }}>
                <ProductCard
                  name_en={row.name_en}
                  main_photo={row.main_photo}
                  selling_price={row.selling_price}
                  description_en={row.description_en}
                />
              </Col>
            ))}
        </Row>
      </main>
    </>
  );
}
