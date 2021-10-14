
import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import InterfaceSVG from './assets/interface.svg'
import CardfileSVG from './assets/cardfile.svg'
import GroupSVG from './assets/group.svg'
import LocationSVG from './assets/location.svg'
import PositionSVG from './assets/position.svg'
import FileSVG from './assets/file.svg'
import DocumentSVG from './assets/document.svg'
import ClusterSVG from './assets/cluster.svg'
import PersonTypeSVG from './assets/persontype.svg'
import ProductSVG from './assets/product.svg'
import ObjectiveSVG from './assets/objective.svg'

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
       { data: { source: 'three', target: 'fourteen', label: 'Edge from Node3 to Node14' } },
    ];

    return <CytoscapeComponent 
    elements={elements}
    layout = { {name: 'random'} }
    style =  { {width: '1920px', height: '1080px'} }
    stylesheet=
    {
        [ 
            {
                selector: 'node[type="function"]',
                style: {
                  'shape': 'round-rectangle',
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
                  'background-image': InterfaceSVG,
                  'background-opacity': 0,
                  'background-color': '#ffffff',
                  'background-fit': 'cover',
                  'background-clip' : 'none',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'width' : '150px',
                  'height': '83px'
                  
                }
              },
              {
                selector: 'node[type="event"]',
                style: {
                  'shape': 'hexagon',
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
                  'background-fit': 'cover',
                  'background-image': ClusterSVG,
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
                  'background-fit': 'cover',
                  'background-position-x': '10px',
                  'background-image': PositionSVG,
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
                  'background-fit': 'cover',
                  'background-width': '1000',
                  'background-position-y': '-25px',
                  'background-image': GroupSVG,
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
                  'background-fit': 'cover',
                  "background-position-y": '-35px',
                  'background-image': LocationSVG,
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
                  'background-fit': 'cover',
                  "background-position-y": '-20px',
                  'background-image': PositionSVG,
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
                  'background-fit': 'cover',
                  'background-opacity': 0,
                  'background-image': FileSVG,
                  'background-color': '#ffffff',
                  'width' : '150px',
                  'height': '100px'
                }
              },
              {
                selector: 'node[type="Document"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-fit': 'cover',
                  'background-opacity': 0,
                  'background-image': DocumentSVG,
                  'background-color': '#ffffff',
                  'width' : '150px',
                  'height': '120px'
                }
              },
              {
                selector: 'node[type="Cardfile"]',
                style: {
                  'shape': 'rectangle',
                  'label': 'data(label)',
                  'text-halign': 'center',
                  'text-valign': 'center',
                  'background-fit': 'cover',
                  'background-image': CardfileSVG,
                  'background-opacity': 0,
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
                  'background-fit': 'cover',
                  'background-image': ClusterSVG,
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
                  'background-fit': 'cover',
                  'background-image': PersonTypeSVG,
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
                  'background-fit': 'cover',
                  'background-position-y': '-40px',
                  'background-image': ProductSVG,
                  'background-opacity': 0,
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
                  'background-fit': 'cover',
                  'background-position-y': '-35px',
                  'background-image': ObjectiveSVG,
                  'background-opacity': 0,
                  'background-color': '#ffffff',
                  'width': '150px',
                  'height': '125px'
                }
              },
        ] 
    }
    />;
  
}



