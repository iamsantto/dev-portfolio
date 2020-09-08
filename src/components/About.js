import React from 'react';

import '../css/about.css'
import { ABOUT } from '../constants/app'

function About() {
  return <div className="About">
    {ABOUT.bio.map((content,index) => <p key={index}>{content}</p>)}
    <div>
      <a href={ABOUT.stackShareUrl} rel="noopener noreferrer" target="_blank">{ABOUT.stack}</a>
    </div>
  </div>
}

export default About;
