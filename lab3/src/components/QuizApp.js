import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';

const questions = [
  {
    questionText: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    questionText: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
    correctAnswer: 'Jupiter',
  },
  {
    questionText: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    correctAnswer: 'JavaScript',
  }
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [quizKey, setQuizKey] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // 👈 thêm state mới

  const handleAnswer = (selected) => {
    setSelectedOption(selected); 
    const current = questions[currentIndex];
    if (selected === current.correctAnswer) {
      setScore(score + 1);
    }

    // delay  
    setTimeout(() => {
      const next = currentIndex + 1;
      if (next < questions.length) {
        setCurrentIndex(next);
        setSelectedOption(null); // reset radio 
      } else {
        setQuizEnded(true);
      }
    }, 1000);
  };

  const handleReplay = () => {
    setCurrentIndex(0);
    setScore(0);
    setQuizEnded(false);
    setQuizKey(prev => prev + 1);
    setSelectedOption(null); // reset checked radio
  };

  return (
    <div style={{ padding: '20px' }}>
      {!quizEnded ? (
        <Question
          key={`${quizKey}-${currentIndex}`}
          question={questions[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedOption={selectedOption} 
          onAnswer={handleAnswer}
        />
      ) : (
        <Score score={score} total={questions.length} onReplay={handleReplay} />
      )}
    </div>
  );
}

export default QuizApp;
