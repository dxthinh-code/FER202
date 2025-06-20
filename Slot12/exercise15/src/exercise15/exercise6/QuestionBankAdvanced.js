// QuestionBankAdvanced.js
import React, { useReducer, useEffect, useRef } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

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
  feedback: "",
  timeLeft: 10,
  highScore: parseInt(localStorage.getItem("highScore") || "0"),
};


function reducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const correct = action.payload === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: action.payload,
        feedback: correct
          ? "Correct! 🎉"
          : `Incorrect! ❌ The correct answer is ${state.questions[state.currentQuestion].answer}`,
      };
    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = isCorrect ? state.score + 1 : state.score;
      const isLast = state.currentQuestion + 1 === state.questions.length;
      const newHigh = Math.max(newScore, state.highScore);
      if (isLast) localStorage.setItem("highScore", newHigh);
      return {
        ...state,
        score: newScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: "",
        showScore: isLast,
        timeLeft: 10,
        highScore: newHigh,
      };
    case "TICK":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
        feedback:
          state.timeLeft === 1 && !state.selectedOption
            ? `⏰ Time's up! The correct answer is ${state.questions[state.currentQuestion].answer}`
            : state.feedback,
      };
    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };
    default:
      return state;
  }
}

export default function QuestionBankAdvanced() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, timeLeft, highScore } = state;
  const timerRef = useRef(null);

  useEffect(() => {
    if (!showScore) {
      timerRef.current = setInterval(() => dispatch({ type: "TICK" }), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [currentQuestion, showScore]);

  useEffect(() => {
    if (timeLeft <= 0 && !selectedOption) {
      dispatch({ type: "SELECT_OPTION", payload: "" });
    }
  }, [timeLeft]);

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <h4>🎖 High Score: {highScore}</h4>
            <Button onClick={() => dispatch({ type: "RESTART_QUIZ" })}>Restart</Button>
          </div>
        ) : (
          <>
            <h5>Question {currentQuestion + 1} / {questions.length}</h5>
            <ProgressBar now={(timeLeft / 10) * 100} className="mb-2" variant={timeLeft <= 5 ? "danger" : "primary"} />
            <h4>{questions[currentQuestion].question}</h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, i) => (
                <Button
                  key={i}
                  className="m-2"
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  onClick={() => dispatch({ type: "SELECT_OPTION", payload: option })}
                  disabled={!!selectedOption}
                >
                  {option}
                </Button>
              ))}
            </div>
            {feedback && (
              <div className="mt-2">
                {feedback.includes("Correct") ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />} {feedback}
              </div>
            )}
            <Button
              className="mt-3"
              disabled={!selectedOption && timeLeft > 0}
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
}
