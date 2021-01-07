import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { List, TrashFill } from 'react-bootstrap-icons';

import {format_paragraphs} from 'utils/format';
import './drawer.scss'

export const DrawerContext = React.createContext();

function ms_to_string(ms) {
  const MINUTE = 1000 * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const WEEK = DAY * 7;
  const YEAR = WEEK * 52;

  var years = Math.floor(ms / YEAR);
  ms -= years * YEAR;
  var weeks = Math.floor(ms / WEEK);
  ms -= weeks * WEEK;
  var days = Math.floor(ms / DAY);
  ms -= days * DAY;
  var hours = Math.floor(ms / HOUR);
  ms -= hours * HOUR;
  var minutes = Math.floor(ms / MINUTE);
  var buffer = '';

  return (_=>{
    if (years) {
      if (years > 1) buffer += years + ' years ';
      else if (years === 1) buffer += '1 year ';
      return buffer + 'ago'
    }
    else if (weeks) {
      if (weeks > 1) buffer += weeks + ' weeks ';
      else if (weeks === 1) buffer += '1 week ';
      return buffer + 'ago'
    }
    else if (days) {
      if (days > 1) buffer += days + ' days ';
      else if (days === 1) buffer += '1 day ';
      return buffer + 'ago'
    }
    else if (hours) {
      if (hours > 1) buffer += hours + ' hours ';
      else if (hours === 1) buffer += '1 hour ';
      return buffer + 'ago'
    }
    else if (minutes) {
      if (minutes > 1) buffer += minutes + ' minutes ';
      if (minutes === 1) buffer += '1 minute ';
      return buffer + 'ago'
    }
    else { return 'Just now' }
  })();
};

export default class Drawer extends React.Component {
  /*
  Sidemenu for use for same-window configuration
  Edit, Discuss tab

  Currently opens from right, takes up {this.width}% of screen width, full height
  Fixed position, following scroll.

  Clicking out of the window will close the menu
  */
  WIDTH = 70

  constructor(props){
    super(props)
    this.state = {
      visible: false,
      right: -this.WIDTH,
      dragging: false,
      resetKey: Date.now(),
    }

    this.close_on_escape = event => {
      const ESCAPE_KEY = 27;
      if (event.keyCode===ESCAPE_KEY) { this.close(); }
    }
    this.bg = React.createRef();

    this.reset_key = this.reset_key.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  // Reason for addition:
  // Core values edit drawer would not update defaultValue of each input upon reorder
  // Updating key prop to force redraw of drawer component Container which contains the displayWindow
  reset_key() {
    this.setState({resetKey: Date.now()})
  }

  stateMap = {
    'edit': 'data',
    'discuss': 'discussion',
    'workshop': 'workshop',
  }

  open(component, displayWindowType='edit', width=this.WIDTH){
    document.addEventListener('keydown', this.close_on_escape);

    this.width = width;
    document.body.style.overflow='hidden';
    this.setState({visible: true, displayWindowType});
    setTimeout(()=>this.setState({right:0}));

    let drawerType = this.stateMap[displayWindowType];

    if(component){
      this.hookedComponent = component;
      // Ensuring data between the component and the drawer are separated, in case changes will not be saved.
      this.setState({ [drawerType]: cloneDeep(component.state[drawerType]) })
    }
  }

  close(save=true){
    document.body.style.overflow='';
    document.removeEventListener('keydown', this.close_on_escape);

    this.setState({right:-this.width});
    setTimeout(()=>this.setState({visible:false}),300);

    if(save && this.hookedComponent){
      // TODO: Update backend data here
      let drawerType = this.stateMap[this.state.displayWindowType];
      this.hookedComponent.setState({ [drawerType]: cloneDeep(this.state[drawerType]) })
    }

    this.hookedComponent = undefined;
    let clearState = Object.values(this.stateMap).reduce((newState,key)=>{
      newState[key] = undefined;
      return newState;
    },{});
    this.setState(clearState);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.close_on_escape);
  }

  // componentDidUpdate() {
  // TODO: Look for state changes here and update backend data
  // }

  render(){
    let data = this.state.data;
    let displayWindow = '';

    if (this.hookedComponent) {
      displayWindow = (_=> {
      switch(this.state.displayWindowType) {
        case 'edit':
        let editWindow = '';
        let exerciseWindow = '';

        if (this.hookedComponent.edit_display)
        { editWindow = this.hookedComponent.edit_display('infobox', this) }
        else if ( Array.isArray(data) ) {
          editWindow = <>
          <Droppable droppableId="data-container">
          { (provided,snapshot)=>
            <div ref={provided.innerRef} {...provided.droppableProps}>{
              data.map((entry,entryI)=>{
                return <Draggable key={entry.join()+entryI} draggableId={entry.join()+entryI} index={entryI}>
                { (provided,snapshot)=>
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <Row style={{marginBottom:'0.5em',padding:'0.5em', borderRadius:'5px', background: '#f8f8f8'}}>
                        <Col style={{display:'flex',flexDirection:'column'}}>{
                          Array.isArray(entry)
                          ? entry.map((field,fieldI)=>
                              <textarea onChange={event=>data[entryI][fieldI]=event.target.value} style={{minWidth:'100px',marginBottom:'5px'}} defaultValue={field} key={fieldI}/>
                            )
                          : <textarea onChange={event=>data[entryI]=event.target.value} style={{minWidth:'100px',marginBottom:'5px'}} defaultValue={entry} key={entry}/>
                        }
                        </Col>
                        <Col xs="auto" style={{display:'flex',flexDirection:'column'}}>
                          <div {...provided.dragHandleProps}>
                            <div style={{padding:'1em',borderRadius:'5px'}}>
                              <List style={{fontSize:'24px',display:'inline-block'}}/>
                            </div>
                          </div>
                          <button
                            onClick={_=>{
                              data.splice(entryI,1);
                              this.setState({data});
                            }}
                            style={{padding:'1em',borderRadius:'5px'}}
                          >
                            <TrashFill style={{fontSize:'24px',display:'inline-block'}}/>
                          </button>
                        </Col>
                      </Row>
                    </div>
                }
                </Draggable>
              })
            }
            {provided.placeholder}
            </div>
          }
          </Droppable>
          <button style={{flex:'100%'}} onClick={_=>{
            let newdata = Array(this.hookedComponent.len_data || 2).fill().map((v,i)=>i===0?'new':'value'+i);
            data.push(newdata);
            this.setState({data});
          }}>Add New</button>
          </>
        }
        if (this.hookedComponent.exercise_display) { exerciseWindow = this.hookedComponent.exercise_display('infobox', this) }

        return <Row>
          <Col style={{minWidth:'300px'}}>
            <Container fluid>{editWindow}</Container>
            <hr/>
          </Col>
          { exerciseWindow &&
            <Col>{exerciseWindow}</Col>
          }
        </Row>

        case 'workshop':

        if (this.hookedComponent.workshop_display)
        { return this.hookedComponent.workshop_display('infobox', this) }
        break

        case 'discuss':
        let discussion = '';
        if (this.state.discussion) {
          discussion = <>
          { this.state.discussion.map((comment)=>
              <Row key={comment['author']['name']+comment['date']} style={{padding:'1em'}}>
                <Col xs={1}>
                  <Image src={comment['author']['image']} style={{padding:'0.5em'}} roundedCircle/>
                </Col>
                <Col>
                  <p><strong>{comment['author']['name']}</strong> <span>{ms_to_string(new Date().getTime() - comment['date'])}</span></p>
                  {format_paragraphs(comment['text'])}
                </Col>
                <hr/>
              </Row>
            )
          }
          </>
        }
        return <Container>
          <Row>
            <textarea style={{width:'100%'}} rows={4} placeholder="Add your comment here"/>
            <Col/>
            <button
            onClick={event=>{
              let text = event.target.previousSibling.previousSibling.value;
              console.log(text);
              this.state.discussion.push({
                author:{
                  name:'Development Drew',
                  image:'https://breakthroughos.com/wp-content/uploads/2020/11/ezgif.com-webp-to-jpg-300x300.jpg'
                },
                date:new Date().getTime(),
                text
              });
            } }
            >Submit</button>
          </Row>
          {discussion}
        </Container>

        default: return ''
      }})()
    }

    return (
      <div className="drawer"
        style={{ display:this.state.visible?'block':'none' }}
        onClick={e=>e.target===this.bg.current?this.close():false}
      >
        <div className="background" ref={this.bg}></div>
        <div className="inner" style={{ width:`${this.width}vw`, right:`${this.state.right}vw`, overflow:this.state.dragging?'hidden':'auto' }}>
          <DragDropContext
           onBeforeCapture={_=>
             this.setState({dragging:true})
           }
           onDragEnd={event=>{
             this.setState({dragging:false});
             this.hookedComponent.on_drag_end &&
             this.hookedComponent.on_drag_end(this, event);
           }}
          >
            <header>
              <h4>{this.hookedComponent && this.hookedComponent.state.title}</h4>
              <div style={{flex:1}}></div>
              <button onClick={_=>this.close(false)} style={{marginRight:'1em'}}>Close without Saving</button>
              <button onClick={this.close}>Close</button>
            </header>
            <Container
            key={this.state.resetKey}
            style={{padding:'1em',paddingBottom:'10em'}}
            >
            {displayWindow}
            </Container>
          </DragDropContext>
        </div>
      </div>
    )
  }
}
