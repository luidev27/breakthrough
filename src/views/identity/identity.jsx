import React from 'react';

// import SideBar from './SideBar';
import IdentityHeader from './Header';
import NameSection from './Name';
import LogoSection from './Logo';
import ColorsSection from './Colors';
import FontsSection from './Fonts';
import ImagerySection from './Imagery';
import IdentityData from './test-json';

import './style.scss';

const Identity = () => {
  const [ready, setReady] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (!ready && IdentityData) {
      setData(IdentityData);
      setReady(true);
    }
  }, [ready, IdentityData]);

  return (
    <div className="identity">
      {/* <SideBar /> */}
      <div className="identity-content">
        {
          ready && data && data.map((component) => (
            <div key={component.id}>
              {component.type === 'Header' && <IdentityHeader data={component} />}
              {component.type === 'Name' && <NameSection data={component} />}
              {component.type === 'Logo' && <LogoSection data={component} />}
              {component.type === 'Colors' && <ColorsSection data={component} />}
              {component.type === 'Fonts' && <FontsSection data={component} />}
              {component.type === 'Imagery' && <ImagerySection data={component} />}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Identity;
