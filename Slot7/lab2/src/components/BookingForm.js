import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function BookingForm() {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <h2 className="text-center mb-4">Book Your Table</h2>
        <Form>
          <Row className="mb-3">
            <Col md={4} className="mb-3 mb-md-0">
              <Form.Control type="text" placeholder="Your Name *" required />
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <Form.Control type="email" placeholder="Your Email *" required />
            </Col>
            <Col md={4}>
              <Form.Select defaultValue="">
                <option disabled value="">Select a Service</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Delivery</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Please write your comment"
                required
              />
            </Col>
          </Row>
          <Button variant="warning" className="px-4">
            Send Message
          </Button>
        </Form>
      </Container>
    </div>
  );
}
