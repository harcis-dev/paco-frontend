import NoneSVG from "./assets/bpmn/events/none.svg"
import NoneIntermediateThrowingSVG from "./assets/bpmn/events/none_intermediate.svg"
import EndSVG from "./assets/bpmn/events/end.svg"
import MessageStartInterruptingSVG from "./assets/bpmn/events/message_start_interrupting.svg"
import MessageStartNonInterruptingSVG from "./assets/bpmn/events/message_start_non_interrupting.svg"
import MessageIntermediateThrowingSVG from "./assets/bpmn/events/message_intermediate_throwing.svg"
import MessageIntermediateCatchingSVG from "./assets/bpmn/events/message_intermediate_catching.svg"
import MessageIntermediateBoundaryNonInterruptingSVG from "./assets/bpmn/events/message_intermediate_boundary_non_interrupting.svg"
import MessageEndSVG from "./assets/bpmn/events/message_end.svg"
import TimerStartInterruptingSVG from "./assets/bpmn/events/timer_start_interrupting.svg"
import TimerStartNonInterruptingSVG from "./assets/bpmn/events/timer_start_non_interrupting.svg"
import TimerIntermediateCatchingSVG from "./assets/bpmn/events/timer_intermediate_catching.svg"
import TimerIntermediateBoundaryNonInterruptingSVG from "./assets/bpmn/events/timer_intermediate_boundary_non_interrupting.svg"
import EscalationStartInterruptingSVG from "./assets/bpmn/events/escalation_start_interrupting.svg"
import EscalationStartNonInterruptingSVG from "./assets/bpmn/events/escalation_start_non_interrupting.svg"
import EscalationIntermediateBoundaryThrowingSVG from "./assets/bpmn/events/escalation_intermediate_boundary_throwing.svg"
import EscalationIntermediateBoundaryInterruptingSVG from "./assets/bpmn/events/escalation_intermediate_boundary_interrupting.svg"
import EscalationIntermediateBoundaryNonInterruptingSVG from "./assets/bpmn/events/escalation_intermediate_boundary_non_interrupting.svg"
import EscalationEndSVG from "./assets/bpmn/events/escalation_end.svg"
import ErrorStartInterruptingSVG from "./assets/bpmn/events/error_start_interrupting.svg"
import ErrorIntermediateBoundaryInterruptingSVG from "./assets/bpmn/events/error_intermediate_boundary_interrupting.svg"
import ErrorEndSVG from "./assets/bpmn/events/error_end.svg"
import CompensationStartInterruptingSVG from "./assets/bpmn/events/compensation_start_interrupting.svg"
import CompensationIntermediateThrowingSVG from "./assets/bpmn/events/compensation_intermediate_throwing.svg"
import CompensationIntermediateBoundaryInterruptingSVG from "./assets/bpmn/events/compensation_intermediate_boundary_interrupting.svg"
import CompensationEndSVG from "./assets/bpmn/events/compensation_end.svg"
import ConditionalStartInterruptingSVG from "./assets/bpmn/events/conditional_start_interrupting.svg"
import ConditionalStartNonInterruptingSVG from "./assets/bpmn/events/conditional_start_non_interrupting.svg"
import ConditionalIntermediateCatchingSVG from "./assets/bpmn/events/conditional_intermediate_catching.svg"
import ConditionalIntermediateBoundaryNonInterruptingSVG from "./assets/bpmn/events/conditional_intermediate_boundary_non_interrupting.svg"
import LinkIntermediateCatchingSVG from "./assets/bpmn/events/link_intermediate_catching.svg"
import LinkIntermediateThrowingSVG from "./assets/bpmn/events/link_intermediate_throwing.svg"



export const bpmn = [
    // Events
  {
    selector: 'node[type="none"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': NoneSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="none_intermediate_throwing"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': NoneIntermediateThrowingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="end"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': EndSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="message_start_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': MessageStartInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="message_start_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': MessageStartNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="message_intermediate_throwing"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': MessageIntermediateThrowingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="message_intermediate_catching"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': MessageIntermediateCatchingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="message_intermediate_boundary_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': MessageIntermediateCatchingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="message_intermediate_boundary_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': MessageIntermediateBoundaryNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="message_end"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': MessageEndSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="timer_start_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': TimerStartInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="timer_start_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': TimerStartNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="timer_intermediate_catching"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': TimerIntermediateCatchingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="timer_intermediate_boundary_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': TimerIntermediateCatchingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="timer_intermediate_boundary_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': TimerIntermediateBoundaryNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="escalation_start_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': EscalationStartInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="escalation_start_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': EscalationStartNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="escalation_intermediate_boundary_throwing"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': EscalationIntermediateBoundaryThrowingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="escalation_intermediate_boundary_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': EscalationIntermediateBoundaryInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="escalation_intermediate_boundary_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': EscalationIntermediateBoundaryNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="escalation_end"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': EscalationEndSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="error_start_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ErrorStartInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="error_intermediate_boundary_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ErrorIntermediateBoundaryInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="error_end"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ErrorEndSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="compensation_start_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': CompensationStartInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="compensation_intermediate_throwing"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': CompensationIntermediateThrowingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="compensation_intermediate_boundary_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': CompensationIntermediateBoundaryInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="compensation_end"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': CompensationEndSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="conditional_start_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ConditionalStartInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="conditional_start_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ConditionalStartNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="conditional_intermediate_catching"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ConditionalIntermediateCatchingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="conditional_intermediate_boundary_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ConditionalIntermediateCatchingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="conditional_intermediate_boundary_non_interrupting"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': ConditionalIntermediateBoundaryNonInterruptingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="link_intermediate_catching"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': LinkIntermediateCatchingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
  {
    selector: 'node[type="link_intermediate_throwing"]',
    style: {
      'shape': 'ellipse',
      //'label': 'data(label)',
      'background-opacity': 0,
      'background-image': LinkIntermediateThrowingSVG,
      'background-color': '#ffffff',
      'background-fit': 'cover',
      'width': '80px',
      'height': '80px'
    }
  },
]