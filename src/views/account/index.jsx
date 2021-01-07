import React from 'react';

// import Sidebar from './sidebar';
import Users from './users';
import Collaborators from './collaborators';
import Settings from './settings';
import Plan from './plan';
import Services from './services';
import Invoices from './invoices';
import Sidebar from './sidebar';
import AccountData from './test-json';

import './account.scss';

const Account = () => {
  const [ready, setReady] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (!ready && AccountData) {
      setData(AccountData.modules[0].components);
      setReady(true);
    }
  }, [ready, AccountData]);

  return (
    <div className="account-page">
      <div className="account-sidebar">
        <Sidebar />
      </div>
      <div className="account-content">
        {
          ready && data && data.map((ele) => (
            <div key={ele.id}>
              {ele.type === 'Users' && <Users title={ele.title} />}
              {ele.type === 'Collaborators' && <Collaborators title={ele.title} />}
              {ele.type === 'Settings' && <Settings title={ele.title} subDescription={ele.short_description} />}
              {ele.type === 'Plan' && <Plan title={ele.title} />}
              {ele.type === 'Services' && <Services title={ele.title} />}
              {ele.type === 'Invoices' && <Invoices title={ele.title} />}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Account;
