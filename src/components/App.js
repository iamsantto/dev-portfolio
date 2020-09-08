import React, { useEffect, useState } from 'react';

import Canvas from './Canvas';
import Connect from './Connect';
import NavBar from './NavBar';

import { HEADER, VIEWS } from '../constants/app';

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
