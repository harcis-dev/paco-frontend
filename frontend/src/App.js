
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Interface from './assets/interface.png'
import Participant from './assets/participant.png'
import Group from './assets/group.png'
import Location from './assets/location.png'
import Position from './assets/position.png'
import File from './assets/file.png'
import Document from './assets/document.png'
import Cardfile from './assets/cardfile.png'
import Cluster from './assets/cluster.png'
import PersonType from './assets/persontype.png'
import Product from './assets/product.png'
import Objective from './assets/objective.png'

export default function App() {

    const elements = [
       { data: { id: 'one', label: 'Function', type: 'function'}, position: { x: 50, y: 100 } },
       { data: { id: 'two', label: 'Process Interface', type: 'interface'}, position: { x: 100, y: 100 } },
       { data: { id: 'three', label: 'Event', type: 'event' }, position: { x: 400, y: 120 } },
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
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
       { data: { source: 'two', target: 'three', label: 'Edge from Node2 to Node3' } },
    ];

    return <CytoscapeComponent 
    elements={elements}
    //layout = { {name: 'preset'} }
    style =  { {width: '1920px', height: '1080px'} }
    stylesheet=
    {
        [ 
            {
                selector: 'node[type="function"]',
                style: {
                  'shape': 'hexagon',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'border-width': '1px',
                  'background-color': '#aaf39f',
                  'width': '160px',
                  'height': '60px'
                }
              },
              {
                selector: 'node[type="interface"]',
                style: {
                  'shape': 'round-rectangle',
                  'background-image': Interface,
                  'background-color': '#ffffff',
                  'background-width': '100%',
                  "background-height": '100%',
                  'background-fit': 'contain',
                  'background-clip' : 'none',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'width' : '150px',
                  'height': '80px'
                  
                }
              },
              {
                selector: 'node[type="event"]',
                style: {
                  'shape': 'round-rectangle',
                  'label': 'data(label)',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-color': '#e99def',
                  'width' : '150px',
                  'height': '60px'
                }
              },
              {
                selector: 'node[type="XOR"]',
                style: {
                  'label': 'X',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-color': '#ffffff',
                  'width' : '50px',
                  'height': '50px'
                }
              },
              {
                selector: 'node[type="AND"]',
                style: {
                  'label': 'Ʌ',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-color': '#ffffff',
                  'width' : '50px',
                  'height': '50px'
                }
              },
              {
                selector: 'node[type="OR"]',
                style: {
                  'label': 'V',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-color': '#ffffff',
                  'width' : '50px',
                  'height': '50px'
                }
              },
              {
                selector: 'node[type="Application"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'background-image': Cluster,
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-color': '#9beaf7',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Technicalterm"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-color': '#ffffff',
                  'width' : '150px',
                  'height': '60px'
                }
              },
              {
                selector: 'node[type="Participant"]',
                style: {
                  'label': 'data(label)',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Participant,
                  'background-color': '#f4e682',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Group"]',
                style: {
                  'label': 'data(label)',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Group,
                  'background-color': '#f4e682',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Location"]',
                style: {
                  'label': 'data(label)',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Location,
                  'background-color': '#f4e682',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Position"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'border-width': '1px',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Position,
                  'background-color': '#f4e682',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="File"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': File,
                  'background-color': '#ffffff',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Document"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Document,
                  'background-color': '#ffffff',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Cardfile"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Cardfile,
                  'background-color': '#ffffff',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Cluster"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'border-width': '1px',
                  'background-image': Cluster,
                  'background-color': '#f35353',
                  'width' : '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="InternalPerson"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'border-width': '1px',
                  'background-color': '#f4e682',
                  'width': '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="ExternalPerson"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'border-width': '1px',
                  'background-color': '#ffffff',
                  'width': '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="PersonType"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'border-width': '1px',
                  'background-image': PersonType,
                  'background-color': '#f4e682',
                  'width': '150px',
                  'height': '80px'
                }
              },
              {
                selector: 'node[type="Product"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Product,
                  'background-color': '#ffffff',
                  'width': '150px',
                  'height': '80px',
                }
              },
              {
                selector: 'node[type="Objective"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-image': Objective,
                  'background-color': '#ffffff',
                  'width': '150px',
                  'height': '80px'
                }
              },
        ] 
    }
    />;
  
}



