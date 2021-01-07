/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const AnimationButton = ({
  icon, text, onClick, color, bgColor, className,
}) => (
  <Style.AnimationButton className={className} onClick={onClick} color={color} bgColor={bgColor}>
    {icon}
    <Style.Text>{text}</Style.Text>
  </Style.AnimationButton>
);

AnimationButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.element,
  text: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
};

export default AnimationButton;
