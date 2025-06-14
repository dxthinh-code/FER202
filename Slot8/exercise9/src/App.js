import React from 'react';
import AboutMe from './component/AboutMe';
import FptLogo from './component/FPTLogo';
import SimpleWebsite from './component/SimpleWebsite';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Exercise 9 – React Component</h1>

      {/* Bài 1: AboutMe */}
      <AboutMe />

      {/* Logo FPT */}
      <FptLogo />

      {/* Website đơn giản */}
      <SimpleWebsite />
    </Container>
  );
}

export default App;
