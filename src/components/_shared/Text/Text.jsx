/* eslint-disable react/require-default-props */
import React from 'react';
import {
  string, element, oneOfType, bool,
} from 'prop-types';
import * as Style from './style';

const Text = ({
  isInline,
  color,
  width,
  height,
  weight,
  spacing,
  padding,
  margin,
  family,
  children,
  transform,
  align,
}) => (
  <>
    {isInline && (
      <Style.InlineText
        color={color}
        width={width}
        height={height}
        weight={weight}
        spacing={spacing}
        padding={padding}
        margin={margin}
        family={family}
        transform={transform}
        align={align}
      >
        {children}
      </Style.InlineText>
    )}
    {!isInline && (
      <Style.ParagraphText
        color={color}
        width={width}
        height={height}
        weight={weight}
        spacing={spacing}
        padding={padding}
        margin={margin}
        family={family}
        transform={transform}
        align={align}
      >
        {children}
      </Style.ParagraphText>
    )}
  </>
);

Text.propTypes = {
  isInline: bool,
  color: string,
  width: string,
  height: string,
  weight: string,
  padding: string,
  spacing: string,
  margin: string,
  family: string,
  transform: string,
  align: string,
  children: oneOfType([string, element]),
};

export default Text;
