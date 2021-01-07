import React from 'react';
import './sidebar.scss';

const sideMenu = [
  {
    name: 'CULTURE',
    child: [
      {
        name: 'Core Values',
        href: 'core-values',
      },
      {
        name: 'Mission',
        href: 'mission',
      },
      {
        name: 'Visioin',
        href: 'vision',
      },
      {
        name: 'Why',
        href: 'why',
      },
      {
        name: 'Manifesto',
        href: 'manifesto',
      },
      {
        name: 'BHAGs',
        href: 'bhags',
      },
    ],
  },
  {
    name: 'STRATEGY',
    child: [
      {
        name: 'SWOT',
        href: 'swot',
      },
      {
        name: 'Market Strategy',
        href: 'market-strategy',
      },
    ],
  },
  {
    name: 'OPERATIONS',
    child: [
      {
        name: 'Leadership Team',
        href: 'leadership-team',
      },
      {
        name: 'Org Chart',
        href: 'org-chart',
      },
      {
        name: 'Divisions',
        href: 'divisions',
      },
      {
        name: 'Meeting Rhythm',
        href: 'meeting-rhythm',
      },
      {
        name: 'KPIs',
        href: 'kpis',
      },
    ],
  },
  {
    name: 'BRAND',
    child: [
      {
        name: 'Targets',
        href: 'targets',
      },
      {
        name: 'Personas',
        href: 'personas',
      },
      {
        name: 'Value Propositions',
        href: 'value-propositions',
      },
      {
        name: 'Brand Voice',
        href: 'brand-voice',
      },
      {
        name: 'Messaging',
        href: 'messaging',
      },
      {
        name: 'Proof',
        href: 'proof',
      },
    ],
  },
  {
    name: 'SALES',
    child: [
      {
        name: 'Products / Services',
        href: 'products-services',
      },
      {
        name: 'Critical Sales Path',
        href: 'critical-sales-path',
      },
    ],
  },
  {
    name: 'CUSTOMER EXPERIENCE',
    child: [
      {
        name: 'Customer Drivers',
        href: 'customer-drivers',
      },
      {
        name: 'CX Vision',
        href: 'cx-vision',
      },
      {
        name: 'CX Actions',
        href: 'cx-actions',
      },
    ],
  },
];

const getSidebar = () => (
  sideMenu.map((category) => (
    <div key={category.name}>
      <span>{category.name}</span>
      {
        category.child.map((item) => (
          <div key={item.href}>
            <ul>
              <li>{item.name}</li>
            </ul>
          </div>
        ))
        }
    </div>
  ))
);

const Sidebar = () => (
  <div className="bg-sidebar">
    <div className="sidebar-tree">
      {getSidebar()}
    </div>
  </div>
);

export default Sidebar;
