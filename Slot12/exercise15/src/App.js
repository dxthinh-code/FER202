// App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from "react-bootstrap";

import Exercise4 from "./exercise15/exercise4";
import Exercise5 from "./exercise15/exercise5";
import Exercise6 from "./exercise15/exercise6";

function App() {
  return (
    <Container className="my-4">
      <Card className="mb-5 p-4">
        <h2 className="text-primary">Exercise 4 – ItemList Advanced</h2>
        <Exercise4 />
      </Card>

      <Card className="mb-5 p-4">
        <h2 className="text-success">Exercise 5 – QuestionBank Basic</h2>
        <Exercise5 />
      </Card>

      <Card className="mb-5 p-4">
        <h2 className="text-danger">Exercise 6 – QuestionBank Advanced</h2>
        <Exercise6 />
      </Card>
    </Container>
  );
}

export default App;

