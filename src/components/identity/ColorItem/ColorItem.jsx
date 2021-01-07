import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphText } from '../../_shared/Text';
import * as Style from './style';

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

const rgb2cmyk = (red, green, blue) => {
  let computedC = 0;
  let computedM = 0;
  let computedY = 0;
  let computedK = 0;
  // remove spaces from input RGB values, convert to int
  const r = parseInt((`${red}`).replace(/\s/g, ''), 10);
  const g = parseInt((`${green}`).replace(/\s/g, ''), 10);
  const b = parseInt((`${blue}`).replace(/\s/g, ''), 10);

  if (r === null || g === null || b === null
      || isNaN(r) || isNaN(g) || isNaN(b)) {
    return '';
  }
  if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
    return '';
  }

  // BLACK
  if (r === 0 && g === 0 && b === 0) {
    computedK = 1;
    return '(0%, 0%, 0%, 100%)';
  }

  computedC = 1 - (r / 255);
  computedM = 1 - (g / 255);
  computedY = 1 - (b / 255);

  const minCMY = Math.min(computedC,
    Math.min(computedM, computedY));
  computedC = Math.round((computedC - minCMY) / (1 - minCMY) * 100);
  computedM = Math.round((computedM - minCMY) / (1 - minCMY) * 100);
  computedY = Math.round((computedY - minCMY) / (1 - minCMY) * 100);
  computedK = Math.round(minCMY * 100);

  return `(${computedC}%, ${computedM}%, ${computedY}%, ${computedK}%)`;
};

const ColorItem = ({
  title, hex,
}) => (
  <Style.Container>
    <ParagraphText height="1.5" color="#555" margin="0 0 10px" transform="uppercase">
      <strong>{title}</strong>
    </ParagraphText>
    <Style.ColorPanel hex={hex} />
    <ParagraphText height="1.5" color="#555" transform="uppercase">
      <strong>hex: </strong>
      {hex}
    </ParagraphText>
    <ParagraphText height="1.5" color="#555" transform="uppercase">
      <strong>rgb: </strong>
      {hexToRgb(hex) ? `(${hexToRgb(hex).r}, ${hexToRgb(hex).g}, ${hexToRgb(hex).b})` : ''}
    </ParagraphText>
    <ParagraphText height="1.5" color="#555" transform="uppercase">
      <strong>cmyk: </strong>
      {hexToRgb(hex) ? rgb2cmyk(hexToRgb(hex).r, hexToRgb(hex).g, hexToRgb(hex).b) : ''}
    </ParagraphText>
  </Style.Container>
);

ColorItem.propTypes = {
  title: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
};

export default ColorItem;
