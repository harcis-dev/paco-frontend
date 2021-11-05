

export const dfg = [
    {
        selector: 'node[type="node"]',
        style: {
            'shape': 'ellipse',
            'label': 'data(label)',
            'text-wrap': 'wrap',
            'text-halign': 'center',
            'text-valign': 'center',
            'border-width': '1px',
            'background-color': '#a9d7f3',
            'width': '160px',
            'height': '60px'
        }
    },
    {
      
        selector: 'edge[type="DirectedEdge"]',
        style: {
            'width': 1,
            'font-size' : '16px',
            'label': 'data(label)',
            'text-background-opacity': 1,
            'text-background-colour': '#ffffff',
            'text-wrap': 'wrap',
            'text-overflow-wrap': 'anywhere',
            'text-background-color': 'white',
            'text-justification': 'auto',
            'line-color': '#000000',
            'target-arrow-shape': 'triangle',
            'target-arrow-color': '#000000',
            'curve-style': 'unbundled-bezier'
        }
       
    }
]