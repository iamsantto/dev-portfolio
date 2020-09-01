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
      <div className="Stack">{organisation.stack?.join(', ')}</div>
    </div>)}
  </div>
}

export default Work;
