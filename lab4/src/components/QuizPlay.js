import React, { useState, useContext } from 'react';
import { QuizContext } from './QuizContext';

function QuizPlay() {
  const { questions, selectedAnswer, setSelectedAnswer } = useContext(QuizContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');

  const currentQuestion = questions[currentIndex];

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleNext = () => {
    if (!selected) return;

    setSelectedAnswer(selected);
    if (selected === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setSelected(''); // reset radio

    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'crimson', fontSize: '2rem' }}>Quiz Completed!</h2>
        <p style={{ fontSize: '1.2rem' }}>Your score: <strong>{score}</strong></p>
      </div>
    );
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h3 style={{ color: 'crimson' }}>Question {currentIndex + 1}</h3>
      <p><strong>{currentQuestion.question}</strong></p>

      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
        {currentQuestion.answers.map((answer, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <label>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selected === answer}
                onChange={handleChange}
              />
              {' '}
              {answer}
            </label>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        style={{
          marginTop: '15px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          padding: '8px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        disabled={!selected}
      >
        Next
      </button>
    </div>
  );
}

export default QuizPlay;
