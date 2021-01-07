/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Strategic from '../../../components/account/Strategic';
import { settings } from '../../../assets/data';
import './settings.scss';

const Settings = ({ title, subDescription }) => (
  <div id="settings" className="settings">
    <div className="settings-title pt-4 mb-1">{title}</div>
    <hr />
    <div className="settings-body mt-4">
      <div className="description mb-2">{subDescription}</div>
      <Row>
        {settings.map((setting) => (
          <Col md="6" lg="4" className="mb-4 col-12" key={setting.type}>
            <div className="d-flex flex-column">
              <div className="sub-title mb-2">{setting.type}</div>
              {
                setting.settings.map((el) => <div className="mb-2" key={el.text}><Strategic {...el} /></div>)
              }
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

Settings.propTypes = {
  title: string.isRequired,
  subDescription: string.isRequired,
};

export default Settings;
