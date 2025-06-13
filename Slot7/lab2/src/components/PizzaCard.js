import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

export default function PizzaCard({ image, title, price, oldPrice, badge }) {
  return (
    <Card className="h-100">
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
        {badge && (
          <Badge bg="warning" text="dark" style={{ position: 'absolute', top: '10px', left: '10px' }}>
            {badge}
          </Badge>
        )}
      </div>
      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {oldPrice && <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>${oldPrice.toFixed(2)}</span>}
          <span style={{ color: 'orange', fontWeight: 'bold' }}>${price.toFixed(2)}</span>
        </Card.Text>
        <Button variant="dark">Buy</Button>
      </Card.Body>
    </Card>
  );
}

