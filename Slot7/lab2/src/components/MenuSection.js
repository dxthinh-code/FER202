import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaCard from './PizzaCard';

const pizzas = [
  {
    title: 'Margherita Pizza',
    image: 'https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg',
    oldPrice: 40,
    price: 24,
    badge: 'SALE',
  },
  {
    title: 'Mushroom Pizza',
    image: 'https://2.bp.blogspot.com/-KO3GOIu7tT0/VbIoN6-TqYI/AAAAAAAAOfI/YFMtaZYPjuQ/s1600/IMGP3353.JPG',
    price: 25,
  },
  {
    title: 'Hawaiian Pizza',
    image: 'https://recipes.net/wp-content/uploads/2020/03/dominos-copycat-hawaiian-pizza-recipe.jpg',
    price: 30,
    badge: 'NEW',
  },
  {
    title: 'Pesto Pizza',
    image: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2023/04/chicken-pesto-pizza-3-014-700x1050.jpg',
    oldPrice: 50,
    price: 30,
    badge: 'SALE',
  },
];

export default function MenuSection() {
  return (
    <div className="bg-dark text-white py-5 px-3 px-md-5">
      <Container fluid>
        <h2 className="text-center mb-4">Our Menu</h2>
        <Row>
          {pizzas.map((pizza, index) => (
            <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
              <PizzaCard {...pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

