import React from 'react';
import { string, element, oneOfType } from 'prop-types';
import './style.scss';

const Element = ({ className, children }) => (
  <div className={`${className} element-container`}>
    {children}
  </div>
);

Element.propTypes = {
  className: string,
  children: oneOfType([string, element]),
};

Element.defaultProps = {
  className: '',
  children: '',
};

export default Element;
