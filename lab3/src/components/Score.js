import React from 'react';

function Score({ score, total, onReplay }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Quiz Ended</h2>
      <p>Your Score: <strong>{score}</strong> / {total}</p>
      <button
        onClick={onReplay}
        style={{
          marginTop: '16px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Play Again
      </button>
    </div>
  );
}

export default Score;
