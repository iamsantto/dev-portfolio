import React from 'react';

import '../css/canvas.css'
import About from './About'
import Work from './Work'
import { VIEWS } from '../constants/app';

function Canvas ({ view }) {
  return <div className="Canvas">
    <div className="Content">
      { view === VIEWS.about ? <About /> : <Work /> }
    </div>
  </div>
}

export default Canvas;
