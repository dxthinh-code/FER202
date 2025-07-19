import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">🛒 Redux Cart</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Products</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/add">Add Product</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="flex-grow-1 mt-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add" element={<ProductForm />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
