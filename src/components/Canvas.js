import React from 'react';

import { VIEWS } from '../constants/app';
import About from './About';
import Work from './Work';

function Canvas({ view }) {
  return (
    <div className="Canvas">
      <div className="Content">
        { view === VIEWS.about ? <About /> : <Work /> }
      </div>
    </div>
  );
}

export default Canvas;
