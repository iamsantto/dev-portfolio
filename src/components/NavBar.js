import React from 'react';
import { FOOTER } from '../constants/app';

function NavBar({ setView }) {
  return <div className="Nav-Bar">
    {FOOTER.nav.map((item) => item.link ?
      <a href={item.link} key={item.link} target={item.target || '_blank'}>{item.name}</a>
      : <span onClick={() => setView(item.name.toLowerCase())}>{item.name}</span>
    )}
  </div>
}

export default NavBar;
