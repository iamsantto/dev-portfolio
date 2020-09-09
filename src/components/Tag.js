import React from 'react';

function Tag({ name }) {
  return <pre className="Tag"><i>{`<${name}>`}</i></pre>
}

export default Tag
