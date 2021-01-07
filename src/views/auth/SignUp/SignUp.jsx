import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { SignUpForm, ResendLinkForm } from '../../../components/auth';
import { authSignUp, authResendLink } from '../../../redux/reducers/auth';
import { makeSelectAuthLoading, makeSelectAuthError, makeSelectRegisterStep } from '../../../redux/selectors';
import './style.scss';

const SignUp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(makeSelectAuthLoading());
  const error = useSelector(makeSelectAuthError());
  const step = useSelector(makeSelectRegisterStep());
  const [emailAdr, setEmailAdr] = React.useState('');

  return (
    <div className="sign-up">
      <Row>
        <Col xs="12" md="8" className="signup-container d-flex flex-column justify-content-center align-items-center">
          {
            step === 0 && (
              <SignUpForm
                onSubmit={({
                  password, confirmPassword, email,
                }) => {
                  setEmailAdr(email);
                  dispatch(authSignUp({
                    email,
                    password,
                    password_confirmation: confirmPassword,
                  }));
                }}
                isSubmitting={isLoading}
                error={error}
              />
            )
          }
          {
            step === 1 && (
              <ResendLinkForm
                onSubmit={() => {
                  dispatch(authResendLink({ email: emailAdr }));
                }}
                email={emailAdr}
              />
            )
          }
        </Col>
        <Col
          xs="12"
          md="4"
          className="d-none d-md-block"
          style={{
            backgroundImage: 'url(https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </Row>
    </div>
  );
};

export default SignUp;
