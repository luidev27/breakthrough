import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const Strategic = ({ value, text, onChange }) => {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (!ready) {
      setStatus(value);
      setReady(true);
    } else {
      onChange();
    }
  }, [value, onChange, ready, status]);

  return (
    <div className="strategic">
      <button type="button" onClick={() => setStatus(!status)} className={status ? 'checked' : 'unchecked'}>
        {status ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} /> }
      </button>
      <div className={status ? 'strategic-text checked' : 'strategic-text unchecked'}>{text}</div>
    </div>
  );
};

Strategic.propTypes = {
  value: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

Strategic.defaultProps = {
  value: false,
  text: 'Core Values',
  onChange: () => {},
};

export default Strategic;
