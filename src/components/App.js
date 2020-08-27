import React, { useEffect } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import About from './About';
import Canvas from './Canvas';
import CardOverlay from './CardOverlay';
import Connect from './Connect';
import Title from './Title';
import NavBar from './NavBar';
import Work from './Work';

import { HEADER } from '../constants/app';

import '../css/main.css';
import '../css/header.css';
import '../css/footer.css';

function App() {
  useEffect(() => {
    document.title = HEADER.name
  });

  return (
    <div className="App">
      <CardOverlay position="Header">
        <Title />
        <div><img src={HEADER.profilePicImg} alt={HEADER.profilePicAlt} className="Profile-Picture" /></div>
      </CardOverlay>
      <Switch>
        <Route exact path="/">
          <Canvas><About /></Canvas>
        </Route>
        <Route path="/work">
          <Canvas><Work /></Canvas>
        </Route>
      </Switch>
      <CardOverlay position="Footer">
        <NavBar />
        <Connect />
      </CardOverlay>
    </div>
  );
}

export default App;
