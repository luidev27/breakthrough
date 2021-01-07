/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { string } from 'prop-types';
import ServiceCard from '../../../components/account/ServiceCard';
import { services } from '../../../assets/data';
import './services.scss';

const Services = ({ title }) => (
  <div id="services" className="services">
    <div className="services-title pt-4 mb-1">{title}</div>
    <hr />
    <div className="services-body mt-4">
      <Row>
        <Col className="col-12 mb-4" xl="4">
          <h2>Your Services</h2>
          {
            services.map((service) => (
              <div key={service.title}>
                <hr />
                <div className="service-title">{service.title}</div>
                <div className="status">{`${service.status.purchasedHours} Hours Purchased`}</div>
                <div className="status">{`${service.status.usedHours} Hours Used`}</div>
                <div className="status">{`${service.status.remainingHours} Hours Remaining`}</div>
              </div>
            ))
          }
        </Col>
        {
          services.map((service) => <Col className="col-12" lg="6" xl="4" key={service.title}><ServiceCard {...service} /></Col>)
        }
      </Row>
    </div>
  </div>
);

Services.propTypes = {
  title: string.isRequired,
};

export default Services;
