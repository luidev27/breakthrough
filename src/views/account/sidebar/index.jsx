import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <Nav className="flex-column">
      <Nav.Link as={Link} to="/app/account#users">Users</Nav.Link>
      <Nav.Link as={Link} to="/app/account#collaborators">Collaborators</Nav.Link>
      <Nav.Link as={Link} to="/app/account#settings">Settings</Nav.Link>
      <Nav.Link as={Link} to="/app/account#plan">Your Plan</Nav.Link>
      <Nav.Link as={Link} to="/app/account#services">Your Services</Nav.Link>
      <Nav.Link as={Link} to="/app/account#invoices">Invoices</Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;
