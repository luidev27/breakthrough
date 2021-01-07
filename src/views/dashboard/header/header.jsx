import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { ParagraphText } from '../../../components/_shared/Text';
import './header.scss';

const DashboardHeader = () => (
  <div className="dashboard-header">
    <Row>
      <Col xs="5" className="d-flex align-items-center p-0">
        <div className="left-part-padding">
          <ParagraphText width="36px" height="1.4" spacing="0.01rem" margin="0 0 0.625rem">
            Build Your Strategy & Align Your Team
          </ParagraphText>
          <ParagraphText width="14pt" height="1.5" weight="200">
            {'Build the components of your strategy, identity and '}
            {'plan to collaborate with your teams to '}
            <strong>breakthrough.</strong>
          </ParagraphText>
        </div>
      </Col>
      <Col xs="7" className="d-flex align-items-center p-0 right-border">
        <div className="right-part-padding">
          <ParagraphText width="14pt" weight="200" height="1.5" margin="0 0 16px">
            {'You\'ve filled out '}
            <strong>10 of 30 strategic components. </strong>
            <Link to="/complete-strategy">Complete Your Strategy.</Link>
          </ParagraphText>
          <ParagraphText width="14pt" weight="200" height="1.5" margin="0 0 16px">
            Your identity...
          </ParagraphText>
          <ParagraphText width="14pt" weight="200" height="1.5" margin="0 0 16px">
            <strong>No boards </strong>
            {'have been created. '}
            <Link to="/build-first-one">Build your first one.</Link>
          </ParagraphText>
        </div>
      </Col>
    </Row>
  </div>
);

export default DashboardHeader;
