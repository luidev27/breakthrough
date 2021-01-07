import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {format_paragraphs,format_list} from 'utils/format';
import Drawer, {DrawerContext} from 'components/drawer';
import ComponentHeader from 'components/header';
import Component from 'components/component';
import Table from 'components/table';

import SWOT from './swot';
import CoreValues from './corevalues';
import Personas from './personas';
import KeyWordsPhrases from './keywordsphrases';
import Sidebar from './sidebar';
// TEMP:
import Pages from './test-json.js';

const Components = {
  Header: ComponentHeader,
  Table,
  SWOT,
  Personas,
  KeyWordsPhrases,
  Component,
  DEFAULT: Component,
}

class Strategy extends React.Component {
  constructor(props){
    super(props);
    this.drawer = React.createRef();
    // TEMP:
    // Can just props.children once test data is no longer needed.
    // At that point, can replace all test.data in render() with props.children
    this.data = props.children || Pages.pages[0].modules[0];
  }

  // Current test using test JSON
  render() {
    // --- InformationElement parts ---
    let TwoHeader = (element,format) =>
      <>
        { element.title &&
          <>
          <p className="header">{element.title}</p>
          <hr/>
          </>
        }
        { element.header && <h4><strong>{element.header}</strong></h4> }
        {format(element.content)}
      </>

    let SmallHeader = (element,format) =>
      <>
        {element.title && <p className="header">{element.title}</p>}
        {format(element.content, {fontSize:'16pt'})}
      </>

    let Cell = (_classes, {display:Cell=Col}={}) => (element,i) => {
      let body = '';
      let {title,content} = element;

      let [className, ...classes] = _classes;
      classes.splice(0, 0, element.enabled!==false?className:className+'-off');

      // No display. Return early.
      if ( ['workshop','edit'].includes(element.type) )
      { return null }

      // matches InformationElement.type
      let elementMap = {
        'single': _=><h3>{element['content']}</h3>,
        'small-header': _=>SmallHeader(element,format_paragraphs),
        'two-header': _=>TwoHeader(element,format_paragraphs),
        'two-header-list': _=>TwoHeader(element,format_list),
        'value-proposition': _=>(
          <>
          <h5>{element.title}</h5>
          <div style={{display:'flex',flexWrap:'wrap'}}>
          { ['why','description','proof','aspirations'].map(section=>
              <div style={{minWidth:'200px',flex:'1 0 50%',paddingRight:'1em'}} key={section}>
                <span className="header">{section}</span>
                {format_paragraphs(element[section])}
              </div>
            )
          }
          </div>
          </>
        ),
        'DEFAULT': _=>(
          <>
          {title&&<h5><strong>{title}</strong></h5>}
          {format_paragraphs(content)}
          </>
        ),
      };

      body = (elementMap[element.type] || elementMap['DEFAULT'])();

      return (
        <Cell
        key={i}
        className={classes.join(' ')}
        >
        {body}
        </Cell>
      );
    };
    // ---

    // --- Generic Component display options ---
    let componentDisplayMap = {
      'single': {
        // display(className, {elements: [element]} ) {
        display(className) {
          let {elements: [element]} = this.state.data;
          this.classes.push(className)
          return <h3>{element['content']}</h3>
        },
        edit_display( className, {state: {data: {elements: [element]}}} ) {
          return <textarea rows={10} onChange={event=>element['content']=event.target.value} style={{width:'100%',minWidth:'100px'}} defaultValue={element['content']}/>
        }
      },
      'multiple-cell': {
        display(className) {
          return (
            <Row>
            { this.state.data.elements.map( Cell([className]) ) }
            </Row>
          );
        }
      },
      'two-column': {
        display(className) {
          return (
            <>
            {
              this.state.data.elements
              .reduce((rows,element,i)=>{
                if ( ['workshop','edit'].includes(element.type) )
                { return rows }

                if (rows[rows.length-1].length < 2)
                { rows[rows.length-1].push(element) }
                else
                { rows.push([element]) }

                return rows
              }, [[]])
              .map((row,i)=>
                <Row key={i}>
                { row.map(Cell([className,'two-column'])) }
                </Row>
              )
            }
            </>
          );
        }
      },
      'combined-cell': {
        display(className){
          return (
            <Row className={className}>
            { this.state.data.elements.map(Cell([]) ) }
            </Row>
          )
        }
      },
      'multiple-row': {
        display(className) {
          return <>
          {
            this.state.data.elements.map(
              Cell(
                [className],
                {
                  display({className,children}) {
                    return (
                      <Row className={className} style={{marginBottom:'2em'}}>
                        <Col>{children}</Col>
                      </Row>
                    );
                  }
                }
              )
            )
          }
          </>
        }
      },
      'benefits-to-features': {
        display(className) {
          this.classes.push(className);
          this.classes.push('benfitsfeatures');
          this.classes.push('scrollbox-x');

          return <div>
            <Row className="header">
              <Col>Benefit<hr/></Col>
              <Col>Feature(s)<hr/></Col>
            </Row>
            { this.state.data.elements.map((element,i)=>
                <div key={i}>
                <Row style={{fontSize:'16pt'}}>
                  <Col><strong>{element.benefit_bold}</strong> {element.benefit_remaining_text}</Col>
                  <Col>{format_list(element.feature_list,{listStyle:'disc'})}</Col>
                </Row>
                {i < this.state.data.elements.length - 1 ? <hr/> : ''}
                </div>
              )
            }
          </div>
        }
      }
    };

    let componentIDMap = {
      'corevalues': {
        edit_display: CoreValues.prototype.edit_display,
        exercise_display: CoreValues.prototype.exercise_display,
        workshop_display: CoreValues.prototype.workshop_display,
        on_drag_end(drawer, {source,destination,type,...event}) {
          if (!destination) {return}
          switch(type) {
            case 'group':
            let {workshop} = drawer.state;

            let [sourceI,destinationI] = [source,destination].map(x=>parseInt(x.droppableId.split('-')[1]))
            let word = workshop.groups[sourceI].filter(x=>x.visible)[source.index];
            word.group[0] = destinationI;

            let sourceFieldList = workshop.groups[sourceI];
            let destinationFieldList = workshop.groups[destinationI];

            sourceFieldList.splice(source.index,1)
            destinationFieldList.splice(destination.index,0,word);

            // If multiple words in a group are selected after a drag,
            // i.e. if dragging a selected word into a group already with a word selected,
            // deselect all of them.
            if (destinationFieldList.filter(word=>word.group[1]).length>1)
            { destinationFieldList.forEach(word=>word.group[1]=false) }
            break

            default:
            console.log(drawer.state.data.elements.map(x=>x.title))
            drawer.state.data.elements.splice(destination.index,0,
              drawer.state.data.elements.splice(source.index,1)[0]
            );
            console.log(drawer.state.data.elements.map(x=>x.title))
            drawer.reset_key();
          }
        },
      }
    }

    let componentEditMap = {};
    let componentWorkshopMap = {};
    // ---

    return (
      <div className="d-flex">
        <Sidebar/>
        <DrawerContext.Provider value={this.drawer}>
          <Drawer ref={this.drawer}/>
          <Container>
            {
              this.data.components.map((component,i)=>{
                let attrs = {};
                let data = component.elements;

                let Tag = Components[component.type] || Components['DEFAULT'];

                if (component.type in componentDisplayMap)
                { Object.assign(attrs, componentDisplayMap[component.type]); }

                if (component.id)
                { Object.assign(attrs, componentIDMap[component.id]); }

                let edit = component.elements.find(element=>element.type==='edit');
                if (edit)
                { Object.assign(attrs, componentEditMap[edit.edit_type]); }

                let workshop = component.elements.find(element=>element.type==='workshop');
                if (workshop)
                { Object.assign(attrs, componentWorkshopMap[workshop.workshop_type]); }

                switch(component.type) {
                  case 'Header':
                  attrs['image'] = component.attachments[0].attachment_path;
                  break
                  default:
                }

                return (
                  <Tag
                  key={component.id}
                  title={component.title}
                  {...attrs}
                  >
                  {data}
                  </Tag>
                );
              })
            }
          </Container>
        </DrawerContext.Provider>
      </div>
    )
  }
}

export default Strategy;
