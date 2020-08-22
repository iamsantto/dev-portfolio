import React from 'react';

function CardOverlay({ children, position }) {
  return <div className={`Card-Overlay ${position}`}>{children}</div>;
}

export default CardOverlay;
