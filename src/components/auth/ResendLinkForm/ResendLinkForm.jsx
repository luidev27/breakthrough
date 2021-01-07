/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { func, string } from 'prop-types';
import { Button } from 'react-bootstrap';
import { ParagraphText } from '../../_shared/Text';
import './style.scss';

const ResendLinkForm = ({ email, onSubmit }) => (
  <div className="resend-link-form">
    <ParagraphText
      width="36px"
      color="#212529"
      margin="0 0 1rem"
    >
      Activate your account.
    </ParagraphText>
    <ParagraphText
      width="16px"
      color="#212529"
      margin="0 0 1rem"
    >
      {'An email should have been send to your address at '}
      <strong>{email}</strong>
    </ParagraphText>
    <Button variant="primary" onClick={onSubmit}>Resend activation email</Button>
  </div>
);

ResendLinkForm.propTypes = {
  onSubmit: func.isRequired,
  email: string.isRequired,
};

export default ResendLinkForm;
