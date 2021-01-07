import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Container, Col } from 'react-bootstrap';
import { PencilFill, ChatRightTextFill, EaselFill } from 'react-bootstrap-icons';

import {DrawerContext} from 'components/drawer';
import './component.scss';

class InfoButton extends React.Component {
  /*
  Currently used in Edit, Discuss, Workshop It buttons
  Right-aligned, optional icon
  TODO: Add animation on-hover growing button and displaying its text
        Hide text by default (unless no icon is specified)
  */
  constructor(props){
    super(props)
    this.state = {
      text: props.children,
    }
  }

  render() {
    return (
      < button
        className="infobutton"
        onClick={this.props.onClick}
      >
        {this.props.icon&&<this.props.icon/>}
        <span>{this.state.text}</span>
      </button>
    );
  }
}

class BreakthroughComponent extends React.Component {
  /*
    Component with title header
    Accepts variable number of children, but will always display at least 1.
    Distributes 'className' to display blue border, shadow, and hover effect.
  */
  constructor(props) {
    super(props);
    this.classes = [];

    // let edit     = props.children.find(element=>element.type==='edit');
    let workshop = props.children.find(element=>element.type==='workshop');

    let elements = cloneDeep(
      (props.children || [])
      .filter(element=> !['edit','workshop'].includes(element.type) )
    );

    this.state = {
      title: props.title,
      data: {elements},
      discussion: props.discussion || [],
      workshop: workshop || {},
    };

    // Inheriting display functions from a subclass takes priority over props
    ;[
      'on_drag_end',
      'display', 'edit_display', 'exercise_display', 'workshop_display',
    ]
    .forEach(fn=>{
      this[fn] = this[fn] || this.props[fn] || this['default_'+fn];
      this[fn] = this[fn] && this[fn].bind(this);
    });

    this.options = new Set(['Edit','Discuss']);

    if (workshop) {
      this.options.add('Workshop');
    }
  }

  default_workshop_display() {
    return
  }

  get drawer() {
    return (
      this.context
      ? this.context.current
      : { open(){} }
    )
  }

  render() {
    let className = 'component-child';
    let content = '';

    // If not using a display function, and there is no data, do not render the element at all
    if (!this.display && !this.state.data) { return false }
    // Component with a display function
    else if (this.display) {
      let result = this.display(className);
      content = <Container className={this.classes.join(' ')}>{result}</Container>
    }

    return <div className={[this.props.className, 'component'].filter(x=>x).join(' ')} id={this.props.id} style={{...this.props.style}}>
    {/* Header that follows the window */}
    { this.state.title &&
      <div className="header">
        <Col/> {/* Spacer */}
        <Col xs="auto" className="infobuttons">
        { this.options.has('Discuss') &&
          <InfoButton icon={ChatRightTextFill}
          onClick={_=>this.drawer.open(this, 'discuss')}
          >Discuss</InfoButton>
        }
        { this.options.has('Edit') &&
          <InfoButton icon={PencilFill}
          onClick={
            _=>this.drawer.open(this, 'edit')
          }
          >Edit</InfoButton>
        }
        { this.options.has('Workshop') &&
          <InfoButton icon={EaselFill}
          onClick={
            _=>this.drawer.open(this, 'workshop', 100)
          }
          >Workshop It</InfoButton>
        }
        </Col>
        <Col xs="auto" className="infotitle"><h5>{this.state.title}</h5></Col>
      </div>
    }
    {/* Normal header */}
    {/*<div className="header">
      <Col xs="auto">
      <h5><strong>{this.state.title}</strong></h5>
      </Col>
      <Col/> {/ Spacer /}
      <Col xs="auto">
        { this.options.has('Discuss') && <InfoButton icon={ChatRightTextFill}>Discuss</InfoButton>}
        { this.options.has('Edit') &&
          <InfoButton icon={PencilFill} onClick={()=>{this.context && this.context.current.open(this)}}>Edit</InfoButton>
        }
        { this.options.has('Workshop') && <InfoButton icon={EaselFill}>Workshop It</InfoButton>}
      </Col>
      </div>
    */}
    {content}
    </div>;
  }
}
BreakthroughComponent.contextType = DrawerContext;

export default BreakthroughComponent;
