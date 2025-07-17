import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
         <Image
            src="/images/OIP.jpg"
            alt="About Quiz"
            fluid
         className="w-100 shadow rounded"
         />  
        </Col>
        <Col md={6}>
          <h2 className="mb-3">About Us</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            Welcome to <strong>Quiz App</strong> – your ultimate platform for practicing knowledge through exciting quizzes! <br /><br />
            This application is built with <strong>ReactJS</strong> and styled using <strong>React Bootstrap</strong>, providing a smooth and modern user experience. Our mission is to make learning fun and interactive for everyone.
          </p>
          <ul className="mt-4">
            <li>📚 Easy to use</li>
            <li>🧠 Challenging quizzes</li>
            <li>📱 Responsive on all devices</li>
            <li>⚛️ Powered by React Router</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
