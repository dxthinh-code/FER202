import React, { useState } from 'react';

function DragAndDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);
  const handleDrop = (index) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(draggingItem, 1);
    updatedItems.splice(index, 0, movedItem);
    setItems(updatedItems);
    setDraggingItem(null);
  };

  return (
    <div>
      <h3>Drag and Drop List</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            style={{
              padding: '8px',
              margin: '4px',
              border: '1px solid #ccc',
              cursor: 'move',
              background: draggingItem === index ? '#ddd' : '#fff',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;
