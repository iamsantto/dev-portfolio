import React from 'react';

function Title({ designation, location, name }) {
  return <div className="Title">
    <div>{name}</div>
    <div className="Designation">{designation}</div>
    <div className="Location">
      <span>{location}</span>
    </div>
  </div>
}

export default Title;
