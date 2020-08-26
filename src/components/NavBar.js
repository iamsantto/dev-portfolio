import React from 'react';
import { FOOTER } from '../constants/app';

function NavBar() {
  return <div className="Nav-Bar">
    {FOOTER.nav.map(item => <a href={item.link} key={item.link} target={item.target || '_blank'}>{item.name}</a>)}
  </div>
}

export default NavBar;
