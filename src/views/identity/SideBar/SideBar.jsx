import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './style.scss';

const Sidebar = () => (
  <div className="sidebar">
    <Nav className="flex-column">
      <Nav.Link as={Link} to="/identity#name">Name</Nav.Link>
      <Nav.Link as={Link} to="/identity#logo">Logo</Nav.Link>
      <Nav.Link as={Link} to="/identity#colors">Colors</Nav.Link>
      <Nav.Link as={Link} to="/identity#fonts">Fonts</Nav.Link>
      <Nav.Link as={Link} to="/identity#imagery">Imagery</Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;
