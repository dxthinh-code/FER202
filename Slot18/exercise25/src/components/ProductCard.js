import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addToCart } from '../redux/cartSlice';
import { deleteProduct } from '../redux/productThunk';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(product.id));
    }
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image || 'https://via.placeholder.com/300x200'}
        alt={product.name}
        style={{ height: '240px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ${product.price}<br />
          <strong>Catalogs:</strong> {product.catalogs?.join(', ') || 'N/A'}
        </Card.Text>

        <Button
          variant="success"
          onClick={() => dispatch(addToCart(product))}
          className="mt-auto mb-2"
        >
          Add to Cart
        </Button>

        <Button variant="danger" size="sm" onClick={handleDelete}>
          🗑 Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

