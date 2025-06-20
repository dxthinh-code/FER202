// QuestionBank.js
import React, { useReducer } from "react";
import { Button, Container, Card } from "react-bootstrap";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "Pacific",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION": {
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    }
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

export default function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } = state;

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <Button onClick={() => dispatch({ type: "RESTART_QUIZ" })}>Restart</Button>
          </div>
        ) : (
          <>
            <h4>Question {questions[currentQuestion].id}: {questions[currentQuestion].question}</h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, i) => (
                <Button
                  key={i}
                  className="m-2"
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  onClick={() => dispatch({ type: "SELECT_OPTION", payload: option })}
                >
                  {option}
                </Button>
              ))}
            </div>
            <Button
              className="mt-3"
              disabled={!selectedOption}
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
}
