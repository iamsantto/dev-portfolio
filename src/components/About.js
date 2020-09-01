import React from 'react';

import '../css/about.css'
import { ABOUT } from '../constants/app'

function About() {
  return <div className="About">
    <span>{ABOUT.hello}</span>
    {ABOUT.bio.map((content,index) => <p key={index}>{content}</p>)}
    <div className="Container">
      <span>{ABOUT.abilities}</span>
      <div className="RolesWrap">
        {ABOUT.roles.map((role, index)=> <div className="Role" key={index}>
          {role.name}
          <div>{Array.from({ length: role.level }, (level, index) => <b className="Level" key={index}>&mdash;</b>)}</div>
        </div>)}
      </div>
    </div>
    <div className="Container">
      <span>{ABOUT.techStack}</span>
      <div className="TechStack">
        <a href={ABOUT.stackShareUrl} rel="noopener noreferrer" target="_blank">{ABOUT.stack}</a>
      </div>
    </div>
  </div>
}

export default About;
