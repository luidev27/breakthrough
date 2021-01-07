import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { ResetPasswordForm } from '../../../components/auth';
import { authResetPassword } from '../../../redux/reducers/auth';
import { makeSelectAuthLoading, makeSelectAuthError } from '../../../redux/selectors';
import './style.scss';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(makeSelectAuthLoading());
  const error = useSelector(makeSelectAuthError());

  return (
    <div className="reset-password">
      <Row>
        <Col xs="12" md="8" className="resetpwd-container d-flex flex-column justify-content-center align-items-center">
          <ResetPasswordForm
            onSubmit={({ email }) => dispatch(authResetPassword({ email }))}
            isSubmitting={isLoading}
            error={error}
          />
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

export default ResetPassword;
