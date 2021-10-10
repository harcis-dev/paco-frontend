
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import Interface from './assets/interface.png'
import Application from './assets/application.png'
import Participant from './assets/participant.png'
import Group from './assets/group.png'
import Location from './assets/location.png'
import Position from './assets/position.png'
import File from './assets/file.png'

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
                  'background-fit': 'contain',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'width' : '152px',
                  'height': '60px'
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
                  'background-image': Application,
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
              }
        ] 
    }
    />;
  
}



