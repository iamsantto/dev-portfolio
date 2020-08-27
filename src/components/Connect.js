import React from 'react';

import { CONNECT } from '../constants/app'

function Connect() {
  return <div className="Connect">
    {CONNECT.map(link =>
      <a href={link.url} rel="noopener noreferrer" target="_blank"><img src={link.logo} alt={link.name} /></a>
    )}
  </div>
}

export default Connect;
