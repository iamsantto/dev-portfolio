import React, { useEffect, useState } from 'react';

import Canvas from './Canvas';
import CardOverlay from './CardOverlay';
import Connect from './Connect';
import Title from './Title';
import NavBar from './NavBar';

import { HEADER, ABOUT, VIEWS } from '../constants/app';

import '../css/main.css';
import '../css/header.css';
import '../css/footer.css';

function App() {
  const [ view, setView ] = useState(VIEWS.about);

  useEffect(() => {
    document.title = HEADER.name
  });

  return (
    <div className="App">
      <img src={HEADER.profilePicImg} alt={HEADER.profilePicAlt} className="Headshot" />
      <h2>{HEADER.name}</h2>
      <h4>{HEADER.designation}</h4>
      <Canvas view={view} />
      <NavBar setView={setView} />
      <Connect />
    </div>
  );
}

export default App;
