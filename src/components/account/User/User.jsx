/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './style.scss';

const User = ({ user }) => {
  if (user) {
    return (
      <div className="user">
        {user.display_picture && (
          <div
            className="user-img mb-2"
            style={{
              backgroundImage: `url(${user.display_picture})`,
            }}
          />
        )}
        {!user.display_picture && (
          <div className="user-img mb-2">
            <FontAwesomeIcon icon={faUser} />
          </div>
        )}
        <div className="user-name">{user.user_name}</div>
      </div>
    );
  }
  return (
    <div className="user">
      <div className="user-img mb-2">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="user-name">Loading ...</div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
