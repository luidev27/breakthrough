/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import cookies from 'js-cookie';
import { getAllPackages } from '../../../redux/reducers/package';
import {
  makeSelectPackages,
  makeSelectPackageError,
  makeSelectPackageLoading,
} from '../../../redux/selectors';
import PlanCard from '../../../components/account/PlanCard';
import './plan.scss';

const Plan = ({ title }) => {
  const dispatch = useDispatch();
  const plans = useSelector(makeSelectPackages());
  const error = useSelector(makeSelectPackageError());
  const isLoading = useSelector(makeSelectPackageLoading());
  const [ready, setReady] = React.useState(false);
  const [currentId, setCurrentId] = React.useState('');

  React.useEffect(() => {
    if (!ready) {
      dispatch(getAllPackages());
      const account = cookies.get('_bt_account');
      if (account && JSON.parse(account).package_id) setCurrentId(JSON.parse(account).package_id);
      setReady(true);
    }
  }, [ready]);

  return (
    <div id="plan" className="plan">
      <div className="plan-title pt-4 mb-1">{title}</div>
      <hr />
      <div className="plan-body mt-4">
        <Row>
          {plans.map((plan) => (
            <Col
              key={plan.id}
              lg="6"
              xl="3"
              className="col-12"
            >
              <PlanCard {...plan} currentId={currentId} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

Plan.propTypes = {
  title: string.isRequired,
};

export default Plan;
