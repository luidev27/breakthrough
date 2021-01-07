import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ServiceCard = ({
  title, content, description, onExcute,
}) => (
  <div className="service-card  p-4 mb-4">
    <div className="service-card-header">{title}</div>
    <hr />
    <div className="service-card-content">{content}</div>
    <hr />
    <div className="service-card-footer">
      <div className="description">{description}</div>
      <button type="button" className="py-3 mt-3" onClick={onExcute}>Add 10 hours</button>
    </div>
  </div>
);

ServiceCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  onExcute: PropTypes.func,
};

ServiceCard.defaultProps = {
  title: '',
  content: '',
  description: '',
  onExcute: () => {},
};

export default ServiceCard;
