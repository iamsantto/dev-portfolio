import React from 'react';
import { HEADER } from '../constants/app';

function Title() {
  return <div className="Title">
    <div className="Name">{HEADER.name}</div>
    <div className="Designation">{HEADER.designation}</div>
    <div className="Location">
      <img src={HEADER.locationIcon} alt={HEADER.locationIconAlt} className="Location-Icon"/>
      <span>{HEADER.location}</span>
    </div>
  </div>
}

export default Title;
