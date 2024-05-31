import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function SimpleNavbar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Products</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button style={{ width: "6rem" }}>
              My Cart
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  bottom: "8px",
                  transform: "translate(250%, 10%)",
                }}
              >
                4
              </div>
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SimpleNavbar;
