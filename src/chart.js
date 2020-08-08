import React from 'react';
import Tree from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
 
class Chart extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{backgroundColor: 'red', width: '100em', height: '100em'}}>
 
        <Tree data={myTreeData} />
 
      </div>
    );
  }
}

export default Chart;