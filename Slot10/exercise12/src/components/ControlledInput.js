import React, { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');
  return (
    <div>
      <h3>Controlled Input</h3>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </div>
  );
}

export default ControlledInput;
