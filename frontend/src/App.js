
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

export default function App() {

    const elements = [
       { data: { id: 'one', label: 'Node 1' }, position: { x: 50, y: 100 } },
       { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 100 } },
       { data: { id: 'three', label: 'Node 3' }, position: { x: 400, y: 120 } },
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
       { data: { source: 'two', target: 'three', label: 'Edge from Node2 to Node3' } }
    ];

    return <CytoscapeComponent 
    elements={elements} style={ { width: '1920px', height: '1080px' } } />;
  
}



