import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Nhớ import CSS riêng nếu có

function Home() {
  return (
    <div className="home-wrapper">
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="/images/launuong.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="/images/nhahang.jpg" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="/images/pizza.jpg" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>

      <div className="text-center mt-4">
        <Link to="/quiz">
          <Button variant="primary" size="lg">Go to Quiz</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
