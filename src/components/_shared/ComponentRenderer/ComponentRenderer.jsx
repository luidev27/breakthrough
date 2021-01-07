/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import {
  string, func, number, array,
} from 'prop-types';
import { ParagraphText } from '../Text';
import {
  ComponentWrapper,
  ComponentHeader,
  ComponentTitle,
  ComponentAction,
} from './style';

const ComponentRenderer = ({
  title, type, elements, short_description,
}) => {
  const [ready, setReady] = useState(false);
  const [edit, setEdit] = useState(null);
  const [sortByTag, setSortByTag] = useState(null);

  useEffect(() => {
    if (!ready) {
      setReady(true);
    }
  }, [ready]);

  if (ready && type === 'info-element') {
    return (
      <ComponentWrapper>
        <ComponentHeader>
          <ComponentTitle>
            <ParagraphText
              width="14pt"
              weight="500"
              color="#00add9"
              transform="uppercase"
            >
              {title}
            </ParagraphText>
          </ComponentTitle>
          <ComponentAction />
        </ComponentHeader>
      </ComponentWrapper>
    );
  }
  return <div />;
};

ComponentRenderer.propTypes = {
  title: string.isRequired,
  type: string.isRequired,
  elements: array.isRequired,
};

export default ComponentRenderer;
