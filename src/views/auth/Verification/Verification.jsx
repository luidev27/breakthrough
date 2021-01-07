import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { VerificationForm } from '../../../components/auth';
import { authVerification } from '../../../redux/reducers/auth';
import { makeSelectAuthLoading, makeSelectAuthError } from '../../../redux/selectors';
import './style.scss';

const Verification = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(makeSelectAuthLoading());
  const error = useSelector(makeSelectAuthError());

  return (
    <div className="verification">
      <Row>
        <Col xs="12" md="8" className="verification-container d-flex flex-column justify-content-center align-items-center">
          <VerificationForm
            onSubmit={({ email }) => dispatch(authVerification({ email }))}
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

export default Verification;
