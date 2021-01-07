import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    let title = this.props.title;
    let [header, body, button] = this.props.children || [];

    return <>
      <Row style={{marginTop:'2em',marginBottom:'2em',letterSpacing:'0.011rem'}}>
        <Col xs="3" style={{marginRight:'3em',minWidth:'300px'}}>
          <Image src={this.props.image} style={{marginBottom:'1em'}} fluid/>
        </Col>
        <Col style={{minWidth:'300px'}}>
          { (title || header) && <div style={{fontFamily:'Raleway',lineHeight:'1.25'}}>
            { title && <h5 style={{color:'#808080',fontSize:'12pt',margin:0,textTransform:'uppercase',fontWeight:400}}>{title}</h5> }
            { header && <p style={{color:'#555555',fontSize:'18pt'}}><strong>{header}</strong></p> }
          </div> }
          { (body || button) && <div style={{fontFamily:'Roboto'}}>
            { body && <p style={{color: '#999999', fontSize: '14pt', fontWeight: 300}}>{body}</p> }
            { button && <button style={{
              color: 'white',
              backgroundColor: '#484bc7',
              borderRadius: '4em',
              padding: '0.5em 2em',
            }}>
              <span>{button}</span>
            </button> }
          </div> }
        </Col>
      </Row>
      <hr style={{marginBottom:'3em'}}/>
    </>
  }
}
