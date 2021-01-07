import React from 'react';
import { Switch } from 'react-router-dom';
import {
  faPaperPlane, faMountain, faFire, faEye, faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import ProtectedRoute from '../../components/_shared/ProtectedRoute';
import NavigationBar from '../../components/_shared/NavigationBar';
import Strategy from '../strategy';
import Identity from '../identity';
import NotFound from '../notfound';
import Dashboard from '../dashboard';
import Account from '../account';
import './style.scss';

const Application = () => (
  <div className="aplication-wrapper">
    <div className="application-nav">
      <NavigationBar
        account={{}}
        menuItems={[
          {
            title: 'Dashboard',
            to: '/app',
            icon: faPaperPlane,
            subMenu: [],
          },
          {
            title: 'Strategy',
            to: '/app/strategize',
            icon: faMountain,
            subMenu: [
              'Core Values',
              'Vision',
              'Mission',
              'Our Why',
              'Big Hairy Audacious Goals',
              'SWOT',
              'Market Strategies',
              'Acquisition Strategy',
              'Target Audiences',
              'Personas',
              'Value Propositions',
              'Brand Voice',
              'Keywords & Phrases',
              'Brand Hierarchy',
              'Brand Messaging',
              'Benefits To Features',
            ],
          },
          {
            title: 'Brand',
            to: '/app/brand',
            icon: faFire,
            subMenu: [
              'Target Audiences',
              'Personas',
              'Value Propositions',
              'Brand Voice',
              'Keywords & Phrases',
              'Brand Hierarchy',
              'Messaging',
              'Benefits To Features',
            ],
          },
          {
            title: 'Identity',
            to: '/app/identity',
            icon: faEye,
            subMenu: [
              'Name',
              'Logo',
              'Colors',
              'Fonts',
              'Imagery',
            ],
          },
          {
            title: 'Marketing',
            to: '/app/marketing',
            icon: faBullhorn,
            subMenu: [],
          },
        ]}
      />
    </div>
    <div className="application-route-outlet">
      <Switch>
        <ProtectedRoute
          path="/app"
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/app/dashboard"
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/app/strategize"
          component={Strategy}
          exact
        />
        <ProtectedRoute
          path="/app/identity"
          component={Identity}
          exact
        />
        <ProtectedRoute
          path="/app/account"
          component={Account}
          exact
        />
        <ProtectedRoute
          path="/app/collaborate"
          component={NotFound}
          exact
        />
      </Switch>
    </div>
  </div>
);

export default Application;
