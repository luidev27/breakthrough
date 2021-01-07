import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { List, TrashFill } from 'react-bootstrap-icons';

import Component from 'components/component';
import './swot.scss'

class SWOT extends Component {
  constructor(props) {
    super(props)
    let title = props.title || 'SWOT';
    Object.assign(this.state,{title});

    Object.assign(this.state.data, {
      ...(
        this.state.data.elements.reduce((obj,element)=>{
          obj[element.slug] = element.inputs;
          return obj;
        },{})
      )
    });
    // --

    this.display = this.display.bind(this);
    this.edit_display = this.edit_display.bind(this);
  }

  on_drag_end(drawer, {source,destination,type:key,...event}){
    if (!destination) {return}
    let sourceFieldList = drawer.state.data[source.droppableId];
    let destinationFieldList = drawer.state.data[destination.droppableId];
    destinationFieldList.splice(destination.index,0,sourceFieldList.splice(source.index,1)[0]);
  }

  display(className) {
    this.classes = this.classes.concat([className,'swot-inner']);
    return (
      [['strengths','weaknesses'],['opportunities','threats']].map(row=>
        <Row key={row}>
          { row.map(section=>
              <Col key={section}>
                <strong className="header">{section}</strong>
                <hr/>
                <ul>
                  { this.state.data[section] &&
                    this.state.data[section].map(({input_title,input_content},i)=>
                      input_title && input_content &&
                      <li key={i}><strong className="label">{input_title}: </strong><span className="description">{input_content}</span></li>
                    )
                  }
                </ul>
              </Col>
            )
          }
        </Row>
      )
    );
  }

  edit_display(className, drawer) {
    let {data} = drawer.state;

    return <>
      { ['strengths','weaknesses','opportunities','threats']
        .map(section=>
          <Droppable type={section} droppableId={section} key={section}>
          { (provided,snapshot)=>
              <Container ref={provided.innerRef} {...provided.droppableProps}>
                <h4 style={{textTransform:'capitalize'}}>{section}</h4>
                <div>
                {
                  data[section] &&
                  data[section].map(({input_title,input_content},i)=>
                    <Draggable
                    key={input_title+input_content+i||i}
                    index={i}
                    type={section}
                    draggableId={input_title+input_content+i||i}
                    >
                    { (provided,snapshot)=>
                        <div ref={provided.innerRef} {...provided.draggableProps}>
                          <Row style={{marginBottom:'0.5em'}}>
                            <div
                              {...provided.dragHandleProps}
                              style={{padding:'0 0.5em',display:'flex',alignItems:'center'}}
                            >
                              <List style={{fontSize:'24px',display:'inline-block'}}/>
                            </div>
                            <input onChange={event=>data[section][i]['input_title']=event.target.value} defaultValue={input_title} placeholder="Header"/>
                            <input onChange={event=>data[section][i]['input_content']=event.target.value} style={{flex:'1'}} defaultValue={input_content} placeholder="Description"/>
                            <button
                            onClick={_=>{
                              data[section].splice(i,1);
                              drawer.setState({data});
                            } }
                            style={{padding:'0 0.5em'}}
                            >
                              <TrashFill style={{fontSize:'16px',display:'inline-block'}}/>
                            </button>
                          </Row>
                        </div>
                    }
                    </Draggable>
                  )
                }
                {provided.placeholder}
                </div>
                <button style={{width:'100%'}} onClick={_=>{
                  data[section] = data[section] || [];
                  data[section].push({});
                  drawer.setState({data});
                }}>Add New</button>
                <hr/>
              </Container>
          }
          </Droppable>
      )}
    </>
  }
}

export default SWOT;
