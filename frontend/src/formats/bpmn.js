import NoneStartSVG from '../assets/dfg/none_start.svg'

export const bpmn = 
[
    {
        selector: 'node[type="NoneStart"]',
        style: {
          'shape': 'circle',
          'label': 'data(label)',
          'text-wrap': 'wrap',
          'text-halign': 'center',
          'text-valign': 'center',
          'border-width': '0.5px',
          'background-color': '#ffffff',
          'width': '30px',
          'height': '30px'
        }
      },
      {
        selector: 'node[type="Intermediate"]',
        style: {
          'shape': 'circle',
          'label': 'data(label)',
          'text-wrap': 'wrap',
          'text-halign': 'center',
          'text-valign': 'center',
          'border-width': '3px',
          'border-style': 'double',
          'background-color': '#ffffff',
          'width': '30px',
          'height': '30px'
        }
      },
      {
        selector: 'node[type="End"]',
        style: {
          'shape': 'circle',
          'label': 'data(label)',
          'text-wrap': 'wrap',
          'text-halign': 'center',
          'text-valign': 'center',
          'border-width': '2px',
          'background-color': '#ffffff',
          'width': '30px',
          'height': '30px'
        }
      },
      {
        selector: 'node[type="Exclusive"]',
        style: {
          'shape': 'diamond',
          'label': 'X',
          'border-width': '0.5px',
          'text-wrap': 'wrap',
          'text-halign': 'center',
          'text-valign': 'center',
          'background-fit': 'cover',
          'background-color': '#ffffff',
          'width': '30px',
          'height': '30px'
        }
      },
      {
        selector: 'node[type="Inclusive"]',
        style: {
          'shape': 'diamond',
          'background-image': NoneStartSVG,
          'border-width': '0.5px',
          'background-width': '1%',
          'background-height': '1%',
          'text-wrap': 'wrap',
          'text-halign': 'center',
          'text-valign': 'center',
          'background-fit': 'cover',
          'background-color': '#ffffff',
          'width': '30px',
          'height': '30px'
        }
      },
      {
        selector: 'node[type="Parallel"]',
        style: {
          'shape': 'diamond',
          'label': '+',
          'text-margin-y': '0.5px',
          'font-size': '35px',
          'border-width': '0.5px',
          'text-wrap': 'wrap',
          'text-halign': 'center',
          'text-valign': 'center',
          'background-fit': 'cover',
          'background-color': '#ffffff',
          'width': '30px',
          'height': '30px'
        }
      },
      {
        selector: 'node[type="GenericTask"]',
        style: {
          'shape': 'round-rectangle',
          'label': 'data(label)',
          'text-wrap': 'wrap',
          'text-halign': 'center',
          'text-valign': 'center',
          'border-width': '0.5px',
          'background-color': '#ffffff',
          'width': '50px',
          'height': '30px'
        }
      },
      {
        selector: ':parent',
        style: {
          'text-valign': 'left',
          'label': 'data(label)',
          'text-halign': 'left',
          'text-rotation': '270deg',
          'text-justification': 'left',
          'text-wrap': 'wrap',
          'text-overflow-wrap': 'anywhere',
          'text-max-width': '130px',
          'font-size': '10px',
          'border-color': '#000000', 
          'ghost': 'yes',
          'ghost-offset-x': '-25',
          'ghost-opacity': '1',
          'background-color': 'white'
        }
      },
      {
        selector: 'edge[type="StandardEdge"]',
        style: {
            'width': "2px",
            'line-color': '#000000',
            'target-arrow-shape': 'triangle',
            'target-arrow-color': '#000000',
            'curve-style': 'taxi'
        }
      },
]