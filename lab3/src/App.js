import React from 'react';
import QuizApp from './components/QuizApp';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>React Quiz App</h1>
      <QuizApp />
    </div>
  );
}

export default App;
