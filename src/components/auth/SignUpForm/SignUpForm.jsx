import React from 'react';
import { func, bool, any } from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { ParagraphText } from '../../_shared/Text';
import './style.scss';

const SignUpForm = ({ onSubmit, isSubmitting, error }) => {
  // const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [valid, setValid] = React.useState(false);
  // const [usernameValidText, setUsernameValidText] = React.useState('');
  const [emailValidText, setEmailValidText] = React.useState('');
  const [pwdValidText, setPwdValidText] = React.useState('');
  const [confirmPwdValidText, setConfirmPwdValidText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      password, confirmPassword, email,
    });
  };

  const validate = ({
    emailStr, passwordStr, confirmPasswordStr,
  }) => {
    // let usernameValid = '';
    let emailValid = '';
    let pwdValid = '';
    let confirmPwdValid = '';

    // if (!usernameStr) {
    //   usernameValid = 'Please enter your username.';
    // }

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

    if (!confirmPasswordStr) {
      confirmPwdValid = 'Please enter confirm password.';
    } else if (confirmPasswordStr !== passwordStr) {
      confirmPwdValid = 'Passwords don\'t match.';
    }

    setEmailValidText(emailValid);
    setPwdValidText(pwdValid);
    setConfirmPwdValidText(confirmPwdValid);
    // setUsernameValidText(usernameValid);
    setValid(!emailValid && !pwdValid && !confirmPwdValid);
  };

  return (
    <Form className="sign-up-form" onSubmit={handleSubmit}>
      <ParagraphText
        width="36px"
        color="#212529"
        margin="0 0 1rem"
      >
        Welcome to Breakthrough
      </ParagraphText>
      <ParagraphText
        width="16px"
        color="#212529"
        margin="0 0 1rem"
      >
        {'Already have an account? '}
        <Link to="/signin">Log In</Link>
      </ParagraphText>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validate({
              emailStr: e.target.value,
              passwordStr: password,
              confirmPasswordStr: confirmPassword,
            });
          }}
          onBlur={(e) => validate({
            emailStr: e.target.value,
            passwordStr: password,
            confirmPasswordStr: confirmPassword,
          })}
        />
        {emailValidText && <Form.Text className="text-danger">{emailValidText}</Form.Text>}
      </Form.Group>
      {/* <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            validate({
              usernameStr: e.target.value,
              emailStr: email,
              passwordStr: password,
              confirmPasswordStr: confirmPassword,
            });
          }}
          onBlur={(e) => validate({
            usernameStr: e.target.value,
            emailStr: email,
            passwordStr: password,
            confirmPasswordStr: confirmPassword,
          })}
        />
        {usernameValidText && <Form.Text className="text-danger">{usernameValidText}</Form.Text>}
      </Form.Group> */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validate({
              passwordStr: e.target.value,
              confirmPasswordStr: confirmPassword,
              emailStr: email,
            });
          }}
          onBlur={(e) => validate({
            passwordStr: e.target.value,
            confirmPasswordStr: confirmPassword,
            emailStr: email,
          })}
        />
        {pwdValidText && <Form.Text className="text-danger">{pwdValidText}</Form.Text>}
      </Form.Group>
      <Form.Group controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            validate({
              confirmPasswordStr: e.target.value,
              passwordStr: password,
              emailStr: email,
            });
          }}
          onBlur={(e) => validate({
            confirmPasswordStr: e.target.value,
            passwordStr: password,
            emailStr: email,
          })}
        />
        {confirmPwdValidText && <Form.Text className="text-danger">{confirmPwdValidText}</Form.Text>}
      </Form.Group>
      <Button type="submit" variant="primary" block disabled={!valid}>Sign Up</Button>
    </Form>
  );
};

SignUpForm.propTypes = {
  onSubmit: func,
  isSubmitting: bool,
  error: any,
};

export default SignUpForm;
