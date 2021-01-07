import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { TrashFill } from 'react-bootstrap-icons';
import './keywords.scss';

import Component from 'components/component';

class KeyWordsPhrases extends Component {
  constructor(props) {
    super(props)
    this.classes.push('keywordsphrases');

    Object.assign(this.state.data, {
      words: this.state.data.elements.find(element=>element.slug==='words'),
      phrases: this.state.data.elements.find(element=>element.slug==='phrases'),
      statements: this.state.data.elements.find(element=>element.slug==='statements'),
    });
  }

  display(className) {
    return (
      <Row className={[className,'scrollbox-x'].join(' ')}>
      {
        ['words','phrases','statements'].map((section,i)=>
          <Col key={i}>
            <span className="header">{section}</span>
            <hr/>
            <ul>{ this.state.data[section].inputs.map((v,i)=><li key={i}>{v}</li>) }</ul>
          </Col>
        )
      }
      </Row>
    );
  }

  // edit_display(drawer) {
  //   return <></>
  // }
}

export default KeyWordsPhrases;
