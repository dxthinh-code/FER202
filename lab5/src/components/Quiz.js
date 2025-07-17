import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Question from './Question';

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    answer: "Mercury",
  },
  {
    id: 3,
    question: "React is developed by which company?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook",
  },
];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerSelect = (questionId, selectedOption) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedOption,
    });
  };

  const handleSubmit = () => {
    if (Object.keys(userAnswers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }

    let correct = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        correct += 1;
      }
    });
    setScore(correct);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Quiz Page</h2>

      {questions.map((q) => (
        <Question
          key={q.id}
          data={q}
          selectedOption={userAnswers[q.id]}
          onAnswerSelect={handleAnswerSelect}
        />
      ))}

      <div className="text-center mt-4">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>

      {score !== null && (
        <>
          <Alert variant="success" className="mt-4 text-center">
            ✅ You scored {score} out of {questions.length}
          </Alert>

          <div className="text-center mt-3">
            <Link to="/" className="btn btn-outline-primary">Back to Home</Link>
          </div>
        </>
      )}
    </Container>
  );
}

export default Quiz;
