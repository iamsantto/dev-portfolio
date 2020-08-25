import React, { useEffect } from 'react';
import Canvas from './Canvas';
import CardOverlay from './CardOverlay';
import Connect from './Connect';
import Title from './Title'
import NavBar from './NavBar'

import { HEADER, FOOTER } from '../constants/app'

import '../App.css';

function App() {
  useEffect(() => {
    document.title = HEADER.name
  })

  return (
    <div className="App">
      <CardOverlay position="Header">
        <Title />
        <div><img src={HEADER.profilePicImg} alt={HEADER.profilePicAlt} className="Profile-Picture" /></div>
      </CardOverlay>
      <Canvas>

      </Canvas>
      <CardOverlay position="Footer">
        <img src={FOOTER.arrowImg} alt={FOOTER.arrowAlt} className="Arrow" />
        <span>Work</span>
      </CardOverlay>
      <NavBar />
      <Connect />
    </div>
  );
}

export default App;
