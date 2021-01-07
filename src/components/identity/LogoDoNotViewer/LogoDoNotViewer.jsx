import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphText } from '../../_shared/Text';
import * as Style from './style';

const LogoDoNotViewer = ({ img, description }) => (
  <Style.Container>
    <ParagraphText height="1.5" margin="0 0 10px" color="#333">
      <strong style={{ color: 'red' }}>DO NOT</strong>
      <br />
      {description}
    </ParagraphText>
    <Style.ImageContainer img={img} />
  </Style.Container>
);

LogoDoNotViewer.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
};

export default LogoDoNotViewer;
