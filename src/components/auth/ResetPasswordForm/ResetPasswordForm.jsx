import React from 'react';
import { func, bool, any } from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { ParagraphText } from '../../_shared/Text';
import './style.scss';

const ResetPasswordForm = ({ onSubmit, isSubmitting, error }) => {
  const [email, setEmail] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const [emailValidText, setEmailValidText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email });
  };

  const validate = ({ emailStr }) => {
    let emailValid = '';

    if (!emailStr) {
      emailValid = 'Please enter your email address.';
    } else {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(emailStr)) {
        emailValid = 'Please enter valid email address.';
      }
    }

    setEmailValidText(emailValid);
    setValid(!emailValid);
  };

  return (
    <Form className="reset-password-form" onSubmit={handleSubmit}>
      <ParagraphText
        width="36px"
        color="#212529"
        margin="0 0 1rem"
      >
        Reset Your Password
      </ParagraphText>
      <ParagraphText
        width="16px"
        color="#212529"
        margin="0 0 1rem"
      >
        {'Feat not. We\'ll email you instructions to reset your password.'}
      </ParagraphText>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validate({ emailStr: e.target.value });
          }}
          onBlur={(e) => validate({ emailStr: e.target.value })}
        />
        {emailValidText && <Form.Text className="text-danger">{emailValidText}</Form.Text>}
      </Form.Group>
      <Button type="submit" variant="primary" block disabled={!valid}>Reset Password</Button>
      <ParagraphText className="d-flex justify-content-center mt-3" width="16px">
        <Link to="/signin" className="mr-3">Return to login</Link>
      </ParagraphText>
    </Form>
  );
};

ResetPasswordForm.propTypes = {
  onSubmit: func,
  isSubmitting: bool,
  error: any,
};

export default ResetPasswordForm;
