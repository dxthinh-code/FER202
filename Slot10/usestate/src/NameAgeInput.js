import React, { useState } from 'react';

function NameAgeInput() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <div>
      <h2>Example 2: Update name and age values ​​for textbox</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => {
          setName(e.target.value);
          console.log(e.target.value);
        }} 
        placeholder="Enter your name"
      />
      <p>My name is {name}</p>

      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value, 10))} 
        placeholder="Enter your age"
      />
      <p>My age is {age}</p>
    </div>
  );
}

export default NameAgeInput;
