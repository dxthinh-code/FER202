import React from 'react';

function Question({ question, onAnswer, questionNumber, totalQuestions, selectedOption }) {
  const handleSelect = (option) => {
    if (!selectedOption) { 
      onAnswer(option);
    }
  };

  return (
    <div>
      <h2>Question {questionNumber}</h2>
      <p><strong>{question.questionText}</strong></p>
      <form>
        {question.options.map((option, idx) => (
          <div key={idx} style={{ margin: '8px 0' }}>
            <label>
              <input
                type="radio"
                name={`question-${questionNumber}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleSelect(option)}
              />
              {' '}
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Question;
