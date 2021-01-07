import React from 'react';
import { func, any, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Form, Button, Spinner,
} from 'react-bootstrap';
import { ParagraphText } from '../../_shared/Text';
import './style.scss';

const SignInForm = ({ onSubmit, isSubmitting, error }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const [emailValidText, setEmailValidText] = React.useState('');
  const [pwdValidText, setPwdValidText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  const validate = ({ emailStr, passwordStr }) => {
    let emailValid = '';
    let pwdValid = '';

    if (!emailStr) {
      emailValid = 'Please enter your email address.';
    } else {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(emailStr)) {
        emailValid = 'Please enter valid email address.';
      }
    }

    if (!passwordStr) {
      pwdValid = 'Please enter your password.';
    } else if (passwordStr.length < 8) {
      pwdValid = 'The Password should be at least 8 characters.';
    }

    setEmailValidText(emailValid);
    setPwdValidText(pwdValid);
    setValid(!emailValid && !pwdValid);
  };

  return (
    <Form className="sign-in-form" onSubmit={handleSubmit}>
      <ParagraphText
        width="36px"
        color="#212529"
        margin="0 0 1rem"
      >
        Log In
      </ParagraphText>
      <ParagraphText
        width="16px"
        color="#212529"
        margin="0 0 1rem"
      >
        {'Need an account? '}
        <Link to="/signup">Create an account</Link>
      </ParagraphText>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validate({ emailStr: e.target.value, passwordStr: password });
          }}
          onBlur={() => validate({ emailStr: email, passwordStr: password })}
        />
        {emailValidText && <Form.Text className="text-danger">{emailValidText}</Form.Text>}
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validate({ emailStr: email, passwordStr: e.target.value });
          }}
          onBlur={() => validate({ emailStr: email, passwordStr: password })}
        />
        {pwdValidText && <Form.Text className="text-danger">{pwdValidText}</Form.Text>}
      </Form.Group>
      <Button type="submit" variant="primary" block disabled={!valid}>
        {!isSubmitting ? 'Log In' : <Spinner animation="border" variant="light" />}
      </Button>
      <Form.Group id="formGridCheckbox" className="d-flex justify-content-center mt-3">
        <Form.Check type="checkbox" label="Keep me logged in" />
      </Form.Group>
      <ParagraphText className="d-flex justify-content-center" width="16px">
        <Link to="/forgot-password">Forgot password?</Link>
      </ParagraphText>
    </Form>
  );
};

SignInForm.propTypes = {
  onSubmit: func,
  isSubmitting: bool,
  error: any,
};

export default SignInForm;
