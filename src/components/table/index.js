import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { TrashFill } from 'react-bootstrap-icons';

import Component from 'components/component';
import './table.scss'

class Table extends Component {
  constructor(props) {
    super(props)
    this.classes.push('table');
  }

  display(className) {
    let col1Width = 1;
    let headerStyle = {margin:'1em', lineHeight:1, display:'flex', flexDirection:'column', justifyContent:'flex-end'};

    let {elements} = this.state.data;
    let columns = elements.find(element=>element.type==='columns');
    let rows = elements.find(element=>element.type==='rows');
    let cells = elements.find(element=>element.type==='data');

    return (
      <div className="scrollbox-x">
        <div style={{minWidth:'1100px'}}>
        { columns.inputs.length &&
          <Row style={{margin:0,width:'100%'}}>
            <Col xs={col1Width}></Col>
            { columns.inputs.map((column,i)=>
                <Col style={headerStyle} key={column}>
                  { i === 0 && <strong>{columns.title}</strong> }
                  <div>{column}</div>
                </Col>
              )
            }
          </Row>
        }
        { rows.inputs.length &&
          rows.inputs.map((row,i)=>
            <Row key={row} style={{width:'100%'}}>
              <Col xs={col1Width} style={{textAlign:'right',lineHeight:1}}>
                { i===0 && <strong>{rows.title}</strong> }
                <div>{row}</div>
              </Col>
              { cells.inputs[i].map(([text, enabled],i)=>
                  <Col className={enabled?className:className+'-off'} key={text}>
                  {text}
                  </Col>
                )
              }
            </Row>
          )
        }
        </div>
      </div>
    )
  }

  edit_display(className,drawer) {
    let {elements} = drawer.state.data;
    let columns = elements.find(element=>element.type==='columns');
    let rows = elements.find(element=>element.type==='rows');
    let cells = elements.find(element=>element.type==='data');

    return <>
      <h5>Columns</h5>
      <Row style={{marginBottom:'1em'}}>
        <input
        placeholder="Column Type"
        defaultValue={columns.title}
        onChange={event=>
          columns.title = event.target.value
        }
        />
        <Col style={{flex:'100%',marginBottom:'0.5em'}}/>
        { columns.inputs.map((col,i)=>
            <input
            key={i}
            placeholder={"Column "+(i+1)}
            defaultValue={col}
            style={{marginRight:'0.5em'}}
            onChange={event=>
              columns.inputs[i] = event.target.value
            }
            />
          )
        }
      </Row>
      <h5>Rows</h5>
      <Row style={{marginBottom:'1em'}}>
        <input
        placeholder="Row Type"
        defaultValue={rows.title}
        onChange={event=>
          rows.title = event.target.value
        }
        />
        <Col style={{flex:'100%',marginBottom:'0.5em'}}/>
        { rows.inputs.map((row,i)=>
            <input
            key={i}
            placeholder={"Row "+(i+1)}
            defaultValue={row}
            style={{marginRight:'0.5em'}}
            onChange={event=>
              columns.inputs[i] = event.target.value
            }
            />
          )
        }
      </Row>
      <h5>Data</h5>
      <Row style={{marginBottom:'1em'}}>
        { cells.inputs.map((row,i)=>
            <Row style={{width:'100%'}} key={i}>
              { row.map((col,i)=>
                  <Col className={className} key={i}>
                    <input defaultValue={col[0]}
                    onChange={event=>
                      col[0] = event.target.value
                    }
                    />
                    <label>Enabled?</label>
                    <input type="checkbox" defaultChecked={col[1]}
                    onChange={event=>{
                      col[1] = event.target.checked;
                      console.log(col[1])
                      drawer.setState({});
                    } }
                    />
                  </Col>
                )
              }
            </Row>
          )
        }
      </Row>
    </>
  }
}

export default Table;
