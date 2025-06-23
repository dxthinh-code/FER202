import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <QuizContext.Provider value={{ questions, setQuestions, selectedAnswer, setSelectedAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};
