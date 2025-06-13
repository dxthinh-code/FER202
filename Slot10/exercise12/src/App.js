import React from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleText from './components/ToggleText';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragAndDropList from './components/DragAndDropList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>React useState Exercise 12</h2>
      <Counter />
      <ControlledInput />
      <ToggleText />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragAndDropList />
    </div>
  );
}

export default App;
