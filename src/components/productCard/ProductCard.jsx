// import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./productCard.css";
export default function ProductCard(props) {
  return (
    <Card style={{ width: "16rem", height: "75%" }}>
      <Card.Img
        variant="top"
        style={{ objectFit: "cover", height: "25%" }}
        src={`https://technical.test.blue-tech.ae/public/${props.main_photo}`}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontSize: "18px" }}>{props.name_en}</Card.Title>
        <Card.Text style={{ fontSize: "15px" }}>
          {props.description_en}
        </Card.Text>
        <Card.Text
          style={{ fontSize: "15px" }}
          className="d-flex justify-content-between align-items-center mt-auto"
        >
          <span>{props.selling_price + "$"}</span>
          {/* need currency formatter */}
          <span>
            <Button variant="primary" className="text-muted ">
              Add to Cart
            </Button>
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  main_photo: PropTypes.string.isRequired,
  name_en: PropTypes.string.isRequired,
  description_en: PropTypes.string.isRequired,
  selling_price: PropTypes.number.isRequired,
  // productId: PropTypes.string.isRequired
};
