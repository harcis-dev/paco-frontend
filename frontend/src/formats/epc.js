import InterfaceSVG from '../assets/epc/interface.svg'
import CardfileSVG from '../assets/epc/cardfile.svg'
import GroupSVG from '../assets/epc/group.svg'
import LocationSVG from '../assets/epc/location.svg'
import PositionSVG from '../assets/epc/position.svg'
import FileSVG from '../assets/epc/file.svg'
import DocumentSVG from '../assets/epc/document.svg'
import ClusterSVG from '../assets/epc/cluster.svg'
import PersonTypeSVG from '../assets/epc/persontype.svg'
import ProductSVG from '../assets/epc/product.svg'
import ObjectiveSVG from '../assets/epc/objective.svg'


export const epc=
[ 
  // Node Types
  {
    selector: 'node[type="Function"]',
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
    selector: 'node[type="Interface"]',
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
    selector: 'node[type="Event"]',
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

  // Edge Types
  {
      selector: 'edge',
      style: {
        'width': 1,
        'line-color': '#000000',
      }
  },
  {
      selector: 'edge[type="InformationFlow"]',
      style: {
        'width': 1,
        'line-color': '#000000',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#000000',
        'curve-style': 'bezier'
      }
  },
  {
      selector: 'edge[type="ControlFlow"]',
      style: {
          'line-style': 'dashed',
          'line-color': '#000000',
          'target-arrow-shape': 'triangle',
          'width': 1,
          'curve-style': 'bezier',
          'target-arrow-color': '#000000',
      }
  }
  ]