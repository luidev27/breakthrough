import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { getProfile } from '../../service/auth';
import { authSignOut } from '../../redux/reducers/auth';

const Menubar = () => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="primary" variant="dark" sticky="top" expand="md">
      <Navbar.Brand as={Link} to="/app/dashboard">
        <img
          src="https://breakthroughos.com/wp-content/uploads/2020/09/Asset-1breakthroughos.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="BreakthroughOS"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="STRATEGY">
            <NavDropdown.Item href="/app/strategize">CORE VALUES</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">VISION</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">MISSION</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">OUR WHY</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">BIG HAIRY AUDACIOUS GOALS</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">SWOT</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">MARKET STRATEGIES</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">ACQUISITION STRATEGY</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">TARGET AUDIENCES</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">PERSONAS</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">VALUE PROPOSITIONS</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">BRAND VOICE</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">KEY WORDS & PHRASES</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">BRAND HIERARCHY</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">BRAND MESSAGING</NavDropdown.Item>
            <NavDropdown.Item href="/app/strategize">BENEFITS TO FEATURES</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="IDENTITY">
            <NavDropdown.Item href="/app/identity">NAME</NavDropdown.Item>
            <NavDropdown.Item href="/app/identity">LOGO</NavDropdown.Item>
            <NavDropdown.Item href="/app/identity">COLORS</NavDropdown.Item>
            <NavDropdown.Item href="/app/identity">FONTS</NavDropdown.Item>
            <NavDropdown.Item href="/app/identity">IMAGERY</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/app/collaborate">COLLABORATE</Nav.Link>
          <NavDropdown title="ACCOUNT">
            <NavDropdown.Item href="/app/account">USERS</NavDropdown.Item>
            <NavDropdown.Item href="/app/account">COLLABORATORS</NavDropdown.Item>
            <NavDropdown.Item href="/app/account">SETTINGS</NavDropdown.Item>
            <NavDropdown.Item href="/app/account">YOUR PLAN</NavDropdown.Item>
            <NavDropdown.Item href="/app/account">SERVICES</NavDropdown.Item>
            <NavDropdown.Item href="/app/account">INVOICES</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {
            getProfile() && (
              <NavDropdown title={`Sign in as ${getProfile().name}`}>
                <NavDropdown.Item onClick={() => dispatch(authSignOut())}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
