import React, { useEffect } from 'react';
import Canvas from './Canvas';
import CardOverlay from './CardOverlay';
import Title from './Title'

import { HEADER } from '../constants/app'

import '../App.css';

function App() {
  useEffect(() => {
    document.title = HEADER.name
  })

  return (
    <div className="App">
      <CardOverlay position="Header">
        <Title
          designation={HEADER.designation}
          name={HEADER.name}
          location={HEADER.location}
        />
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
