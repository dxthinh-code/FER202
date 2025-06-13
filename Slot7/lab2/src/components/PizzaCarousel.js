import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function PizzaCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bacinos.com/wp-content/uploads/2021/06/30-Best-Neapolitan-Pizza-Recipes.jpg"
          alt="Neapolitan Pizza"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Neapolitan Pizza</h3>
          <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
