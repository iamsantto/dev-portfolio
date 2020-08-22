import React from 'react';
import Canvas from './components/Canvas';
import CardOverlay from './components/CardOverlay';

import './App.css';

function App() {
  return (
    <div className="App">
      <CardOverlay position="Header">
        <div></div>
      </CardOverlay>
      <Canvas>

      </Canvas>
      <CardOverlay position="Footer">
        <div></div>
      </CardOverlay>
    </div>
  );
}

export default App;
