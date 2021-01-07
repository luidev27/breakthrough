/* eslint-disable react/no-array-index-key */
import React from 'react';
import { string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { getAllUsers } from '../../../redux/reducers/user';
import {
  makeSelectUsers,
  makeSelectUserError,
  makeSelectUserLoading,
} from '../../../redux/selectors';
import User from '../../../components/account/User';
import Invite from '../../../components/account/Invite';
import './users.scss';

const Users = ({ title }) => {
  const dispatch = useDispatch();
  const users = useSelector(makeSelectUsers());
  const error = useSelector(makeSelectUserError());
  const isLoading = useSelector(makeSelectUserLoading());
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (!ready) {
      dispatch(getAllUsers());
      setReady(true);
    }
  }, [ready]);

  return (
    <div id="users" className="users">
      <div className="users-title mb-1">{title}</div>
      <hr />
      <div className="users-body mt-4">
        <Row>
          {Array.isArray(users) && users.length > 0 && users.map((user) => (
            <Col key={user.id} sm="6" md="3" lg="2" className="mb-4 col-6">
              <User user={user} />
            </Col>
          ))}
          <Col sm="6" md="3" lg="2" className="col-6 mb-4"><Invite text="Invite New User" /></Col>
        </Row>
      </div>
    </div>
  );
};

Users.propTypes = {
  title: string.isRequired,
};

export default Users;
