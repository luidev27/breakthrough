import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphText } from '../../_shared/Text';
import './style.scss';

const NameBox = ({ name, doNot }) => (
  <div className="name-box">
    <ParagraphText width="16pt" height="2" weight="700" color="#555">
      {name}
    </ParagraphText>
    <hr className="my-2" />
    <ParagraphText height="2" color="#555">
      <strong>DO NOT: </strong>
      {doNot.length > 2 ? doNot.join(', ') : doNot.join(' or ')}
    </ParagraphText>
  </div>
);

NameBox.propTypes = {
  name: PropTypes.string,
  doNot: PropTypes.array,
};

export default NameBox;
