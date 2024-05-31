// import { Navbar, Container, Nav } from "react-bootstrap";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsList from "./components/listOfProducts/ProductsList";
function App() {
  return (
    <>
      <ProductsList />
      {/* <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Products</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>
                  list
                </Nav.Link>
                 <Nav.Link as={Link} to={"/f"}>
                  Link
                </Nav.Link> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      {/* <Routes>
          <Route path="/" element={<ProductsList />}></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
