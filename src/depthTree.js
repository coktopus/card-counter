import React from 'react';

function DepthTree({ item, data, id }) {
  return (
    <li>
     <p>{id}</p>
    {item.length>0 && <ul>
    {item.map(
      (x, index)=> <DepthTree item={data[x].children} data={data} id={data[x].id} />
      )}
      </ul>}
    </li>
  );
}
export default DepthTree;
