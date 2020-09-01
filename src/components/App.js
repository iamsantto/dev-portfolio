import React, { useEffect, useState } from 'react';

import Canvas from './Canvas';
import CardOverlay from './CardOverlay';
import Connect from './Connect';
import Title from './Title';
import NavBar from './NavBar';

import { HEADER, VIEWS } from '../constants/app';

import '../css/main.css';
import '../css/header.css';
import '../css/footer.css';

function App() {
  const [ view, setView ] = useState(VIEWS.work);

  useEffect(() => {
    document.title = HEADER.name
  });

  return (
    <div className="App">
      <CardOverlay position="Header">
        <Title />
        <div className="Headshot"><img src={HEADER.profilePicImg} alt={HEADER.profilePicAlt} className="Profile-Picture" /></div>
      </CardOverlay>
      <Canvas view={view}/>
      <CardOverlay position="Footer">
        <NavBar setView={setView} />
        <Connect />
      </CardOverlay>
    </div>
  );
}

export default App;
