import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const Invite = ({ text }) => (
  <div className="invite">
    <div className="invite-img mb-2">
      <FontAwesomeIcon icon={faUserPlus} />
    </div>
    <div className="invite-text">{text}</div>
  </div>
);

Invite.propTypes = {
  text: PropTypes.string.isRequired,
};

Invite.defaultTypes = {
  text: 'Invite New User',
};

export default Invite;
