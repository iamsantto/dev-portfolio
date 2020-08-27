import React from 'react';

import '../css/card-overlay.css'

function CardOverlay({ children, position }) {
  return <div className={`Card-Overlay ${position}`}>{children}</div>;
}

export default CardOverlay;
