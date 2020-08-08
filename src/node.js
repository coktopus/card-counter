import React from 'react';

function Node({ level, value, children, color, margin }) {
  console.log('Node')
  return (
      <div style={{width: '100px',height: '60px', margin: '10px', backgroundColor: 'red', textAlign: 'center'}}>{value}</div>
  );
}

export default Node;
