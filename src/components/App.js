import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [selectedShape, setSelectedShape] = useState('Square');
  const [shapes, setShapes] = useState([]);

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const addShape = () => {
    if (selectedShape === 'Square') {
      setShapes([...shapes, 'square']);
    } else if (selectedShape === 'Circle') {
      setShapes([...shapes, 'circle']);
    }
  };
 return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={addShape}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape, index) => (
          <div key={index} className={shape}></div>
        ))}
      </div>
    </div>
  );
};

export default App;
