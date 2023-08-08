import React, { useState } from 'react';

const DragAndDropList = () => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    // Add more items as needed
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(sourceIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={e => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={e => handleDrop(e, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;