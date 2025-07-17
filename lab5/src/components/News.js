import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const newLists = [
  {
    id: 1,
    title: "Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition",
    description: "“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.",
    images: "/images/lambanh.jpg",
  },
  {
    id: 2,
    title: "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
    description: "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
    images: "/images/MSEmmy_01.jpg",
  },
  {
    id: 3,
    title: "Burger King is testing a new breakfast sandwich",
    description: "This is a win for the flatbread fans.",
    images: "/images/hamburgur.jpg",
  },
  {
    id: 4,
    title: "Popeyes permanently adds chicken wings to its menu",
    description: "And you can get ’em in five different flavors.",
    images: "/images/garan.jpg",
  },
  {
    id: 5,
    title: "Top salmon with a sizzling mix of aromatics and spices",
    description: "Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.",
    images: "/images/cahoi.jpg",
  },
  {
    id: 6,
    title: "80 Christmas dinner ideas for the ultimate holiday feast",
    description: "Build the perfect Christmas menu with these delicious recipes.",
    images: "/images/giangsinh.jpg",
  },
  {
    id: 7,
    title: "How to make the easiest prime rib roast for the holidays",
    description: "Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.",
    images: "/images/cuu.jpg",
  },
  {
    id: 8,
    title: "Turn leftover turkey into a flavorful Waldorf salad",
    description: "This light, bright turkey salad is the best post-Thanksgiving lunch.",
    images: "/images/salad.jpg",
  },
];

function News() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">News</h2>
      <Row>
        {newLists.map((news) => (
          <Col key={news.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={news.images} alt={news.title} className="news-img" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{news.title}</Card.Title>
                <Card.Text className="mb-4">{news.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default News;
