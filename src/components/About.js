import React from 'react';

import '../css/about.css'
import { ABOUT } from '../constants/app'

function About() {
  return <div className="Content About">
    <span>{ABOUT.header}</span>
    {ABOUT.body.map(content => <p>{content}</p>)}
    <span>{ABOUT.footer}</span>
  </div>
}

export default About;
