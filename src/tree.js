import React from 'react';

function Tree({ level, next, data, children }) {
  console.log(children, 'children')
  return (
    <>
    <div style={{margin: '10px'}}>{children}</div>
    </>
  );
}

export default Tree;
