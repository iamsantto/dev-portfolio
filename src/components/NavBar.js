import React from 'react';

import { FOOTER } from '../constants/app';

function NavBar({ setView }) {
  return <nav className="Nav-Bar">
    {FOOTER.nav.map((item) => item.link ?
      <a href={item.link} rel="noopener noreferrer" key={item.name} target={item.target || '_blank'}>{item.name}</a>
      : <span key={item.name} onClick={() => setView(item.name)}>{item.name}</span>
    )}
  </nav>
}

export default NavBar;
