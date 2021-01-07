/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import {
  bool, element, func, object,
} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import * as Styled from './style';

const Drawer = ({
  isOpen, children, onChange, size,
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Styled.DrawerContainer size={size}>
      <SlidingPanel
        type="right"
        isOpen={open}
        onClose={() => { setOpen(false); onChange(false); }}
        backdropClicked={() => { setOpen(false); onChange(false); }}
      >
        <div
          className="close-btn"
          onClick={() => { setOpen(false); onChange(false); }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {children}
      </SlidingPanel>
    </Styled.DrawerContainer>
  );
};

Drawer.propTypes = {
  isOpen: bool,
  children: element,
  onChange: func,
  size: object,
};

export default Drawer;
