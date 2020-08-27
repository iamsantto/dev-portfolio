import React from 'react';

import { ABOUT } from '../constants/app'

function About() {
  return <div className="Content About">
    <span>{ABOUT.header}</span>
    <p>{ABOUT.text}</p>
  </div>
}

export default About;
