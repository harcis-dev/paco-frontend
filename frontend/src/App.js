import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs'
import dagre from 'cytoscape-dagre'
import cytoscape from 'cytoscape'
import {epc} from './formats/epc.js'

cytoscape.use( dagre );

export default function App() {

  // Graph structure
    const elements = [
       { data: { id: 'one', label: 'Function', type: 'Function'}, position: { x: 50, y: 100 } },
       { data: { id: 'two', label: 'Process Interface', type: 'Interface'}, position: { x: 100, y: 100 } },
       { data: { id: 'three', label: 'Event', type: 'Event' }, position: { x: 400, y: 120 } },
       { data: { id: 'four', type: 'XOR' }, position: { x: 600, y: 120 } },
       { data: { id: 'five', type: 'AND' }, position: { x: 700, y: 120 } },
       { data: { id: 'six', type: 'OR' }, position: { x: 500, y: 120 } },
       { data: { id: 'seven', label:'Application', type: 'Application' }, position: { x: 500, y: 120 } },
       { data: { id: 'eight', label: 'Technikkram', type: 'Technicalterm' }, position: { x: 500, y: 120 } },
       { data: { id: 'nine', label: 'Participant', type: 'Participant' }, position: { x: 500, y: 120 } },
       { data: { id: 'ten', label: 'Group', type: 'Group' }, position: { x: 500, y: 120 } },
       { data: { id: 'eleven', label: 'Location', type: 'Location' }, position: { x: 500, y: 120 } },
       { data: { id: 'twelve', label: 'Position', type: 'Position' }, position: { x: 500, y: 120 } },
       { data: { id: 'thirteen', label: 'File', type: 'File' }, position: { x: 500, y: 120 } },
       { data: { id: 'fourteen', label: 'Document', type: 'Document' }, position: { x: 500, y: 120 } },
       { data: { id: 'fifteen', label: 'Cardfile', type: 'Cardfile' }, position: { x: 500, y: 120 } },
       { data: { id: 'sixteen', label: 'Cluster', type: 'Cluster' }, position: { x: 500, y: 120 } },
       { data: { id: 'seventeen', label: 'InternalPerson', type: 'InternalPerson' }, position: { x: 500, y: 120 } },
       { data: { id: 'eighteen', label: 'ExternalPerson', type: 'ExternalPerson' }, position: { x: 500, y: 120 } },
       { data: { id: 'nineteen', label: 'PersonType', type: 'PersonType' }, position: { x: 500, y: 120 } },
       { data: { id: 'twenty', label: 'Product', type: 'Product' }, position: { x: 500, y: 120 } },
       { data: { id: 'twentyone', label: 'Objective', type: 'Objective' }, position: { x: 500, y: 120 } },
       { data: { source: 'one', target: 'two', type: 'ControlFlow' } },
       { data: { source: 'two', target: 'three', type: 'InformationFlow' } },
       { data: { source: 'three', target: 'fourteen' } },
    ];

    return <CytoscapeComponent 
    elements={elements}
    layout = { {name: 'dagre'} }
    style =  { {width: '1920px', height: '1080px'} }
    stylesheet={epc} // The different graph types.
    />;
  
}



