import React, { useEffect, useState } from 'react';

import Canvas from './Canvas';
import Connect from './Connect';
import NavBar from './NavBar';
import Tag from './Tag';

import { HEADER, VIEWS } from '../constants/app';

function App() {
  const [ view, setView ] = useState(VIEWS.about);

  useEffect(() => {
    document.title = HEADER.name
  });

  return (
    <div className="App">
      <Tag name='head' />
        <img src={HEADER.profilePicImg} alt={HEADER.profilePicAlt} className="Headshot" />
        <h1>{HEADER.name}</h1>
        <h2>{HEADER.designation}</h2>
      <Tag name='/head' />
      <Tag name='body' /><Canvas view={view} /><Tag name='/body' />
      <Tag name='footer' />
        <NavBar setView={setView} />
        <Connect />
      <Tag name='/footer' />
    </div>
  );
}

export default App;
