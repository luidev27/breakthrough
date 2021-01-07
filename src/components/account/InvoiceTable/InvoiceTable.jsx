import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.scss';

const InvoiceTable = ({ invoices }) => (
  <div className="invoices-table p-4">
    {
      invoices.map((invoice) => (
        <div key={invoice.date} className="mb-5">
          <Row>
            <Col lg="3" className="invoice-item col-4">{invoice.date}</Col>
            <Col lg="6" className="invoice-item invoice-item-title col-5">{invoice.title}</Col>
            <Col lg="3" className="text-right invoice-item col-3">
              {`$${Number(invoice.amount).toLocaleString(undefined, { maximumFractionDigits: 2 })} Paid`}
            </Col>
          </Row>
          <hr className="my-2" />
        </div>
      ))
    }
  </div>
);

InvoiceTable.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.object),
};

InvoiceTable.defaultProps = {
  invoices: [],
};

export default InvoiceTable;
