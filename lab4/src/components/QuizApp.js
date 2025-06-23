import React, { useState, useEffect, useContext } from 'react';
import { QuizProvider, QuizContext } from './QuizContext';
import QuizPlay from './QuizPlay';

function QuizApp() {
  const [started, setStarted] = useState(false);

  // data
  const defaultQuestions = [
    {
      question: 'What is ReactJS?',
      answers: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system'
      ],
      correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
      question: 'What is JSX?',
      answers: [
        'A programming language',
        'A file format',
        'A syntax extension for JavaScript'
      ],
      correctAnswer: 'A syntax extension for JavaScript'
    },
    {
      question: 'Which hook is used to manage state in a functional component?',
      answers: ['useRef', 'useState', 'useEffect'],
      correctAnswer: 'useState'
    },
    {
      question: 'What does the useEffect hook do?',
      answers: [
        'Manages form input',
        'Performs side effects in function components',
        'Directly manipulates the DOM'
      ],
      correctAnswer: 'Performs side effects in function components'
    },
    {
      question: 'Which company developed ReactJS?',
      answers: ['Google', 'Facebook', 'Microsoft'],
      correctAnswer: 'Facebook'
    }
  ];

  const { setQuestions } = useContext(QuizContext);

  useEffect(() => {
    setQuestions(defaultQuestions);
    setStarted(true); // tự bắt đầu luôn
  }, [setQuestions]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {started && <QuizPlay />}
    </div>
  );
}

export default () => (
  <QuizProvider>
    <QuizApp />
  </QuizProvider>
);
