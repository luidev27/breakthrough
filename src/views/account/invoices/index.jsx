import React from 'react';
import { string } from 'prop-types';
import InviceTable from '../../../components/account/InvoiceTable';
import { invoices } from '../../../assets/data';
import './invoices.scss';

const Invoices = ({ title }) => (
  <div id="invoices" className="invoices mb-4">
    <div className="invoices-title pt-4 mb-1">{title}</div>
    <hr />
    <div className="invoices-body mt-4">
      <InviceTable invoices={invoices} />
    </div>
  </div>
);

Invoices.propTypes = {
  title: string.isRequired,
};

export default Invoices;
