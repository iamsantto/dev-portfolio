import React from 'react';

import '../css/work.css'
import { WORK } from '../constants/app';

function Work() {
  return <div className="Work">
    {WORK.map(organisation => <div className="Organization" key={organisation.title}>
      <div className="Org-Title">
        <a href={organisation.url} target="_blank" rel="noopener noreferrer">{organisation.title}</a>
        <span className="Duration">{organisation.duration}</span>
      </div>
      <ul>
        {organisation.projects.map(project => <li className="Projects" key={project.name}>
          {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
            : <span>{project.name}</span>}
            <p>{project.description}</p>
        </li>)}
        <div className="Stack">Stack: {organisation.stack?.join(', ')}</div>
      </ul>
    </div>)}
  </div>
}

export default Work;
