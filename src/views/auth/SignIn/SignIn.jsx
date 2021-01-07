import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { SignInForm, SelectAccountForm } from '../../../components/auth';
import { authSignIn, authSelectAccount } from '../../../redux/reducers/auth';
import {
  makeSelectAuthLoading,
  makeSelectAuthError,
  makeSelectSignInStep,
  makeSelectAuthData,
} from '../../../redux/selectors';
import './style.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const step = useSelector(makeSelectSignInStep());
  const authData = useSelector(makeSelectAuthData());
  const isLoading = useSelector(makeSelectAuthLoading());
  const error = useSelector(makeSelectAuthError());

  const handleSelectAccount = (val) => {
    dispatch(authSelectAccount({
      account: val,
      token: authData.access_token,
      profile: authData.profile,
    }));
  };

  React.useEffect(() => {
    // Complete SignIn process
    if (step === 2) history.push('/app');
  }, [step]);

  return (
    <div className="sign-in">
      <Row>
        <Col xs="12" md="8" className="signin-container d-flex flex-column justify-content-center align-items-center">
          {step !== 1
            && (
            <SignInForm
              onSubmit={({ email, password }) => {
                dispatch(authSignIn({ email, password }));
              }}
              isSubmitting={isLoading}
              error={error}
            />
            )}
          {step === 1
            && (
            <SelectAccountForm
              isAdmin={authData.profile.is_admin}
              list={authData.profile.is_admin ? authData.users : authData.accounts}
              onSelect={(val) => handleSelectAccount(val)}
            />
            )}
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

export default SignIn;
