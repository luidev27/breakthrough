import React from 'react';
import { string } from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import User from '../../../components/account/User';
import Invite from '../../../components/account/Invite';

import { users } from '../../../assets/data';
import './collaborators.scss';

const Collaborators = ({ title }) => (
  <div id="collaborators" className="collaborators">
    <div className="collaborators-title pt-4 mb-1">{title}</div>
    <hr />
    <div className="collaborators-body mt-4">
      <Row>
        {
          // eslint-disable-next-line react/jsx-props-no-spreading
          users.map((user) => <Col key={user.img} sm="6" md="3" lg="2" className="col-6 mb-4"><User {...user} /></Col>)
        }
        <Col sm="6" md="3" lg="2" className="col-6 mb-4"><Invite text="Invite Collaborator" /></Col>
      </Row>
    </div>
  </div>
);

Collaborators.propTypes = {
  title: string.isRequired,
};

export default Collaborators;
