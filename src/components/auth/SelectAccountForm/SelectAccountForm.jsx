/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { bool, func, array } from 'prop-types';
import { ParagraphText } from '../../_shared/Text';
import './style.scss';

const SelectAccountForm = ({ isAdmin, onSelect, list }) => (
  <div className="select-account-form">
    <ParagraphText
      width="36px"
      color="#212529"
      margin="0 0 1rem"
    >
      Select an account
    </ParagraphText>
    {
      isAdmin && list && Array.isArray(list) && list.map((user) => (
        <div key={user.id}>
          {
            Array.isArray(user.accounts) && user.accounts.length > 0
            && user.accounts.map((account) => (
              <div
                className="account"
                key={account.id}
                onClick={() => onSelect({
                  user_id: user.id,
                  account_id: account.id,
                  package_id: account.package_id,
                })}
              >
                {account.name}
              </div>
            ))
          }
        </div>
      ))
    }
    {
      !isAdmin && list && Array.isArray(list) && list.length > 0 && list.map((account) => (
        <div
          className="account"
          key={account.id}
          onClick={() => onSelect({
            account_id: account.id,
            package_id: account.package_id,
          })}
        >
          {account.name}
        </div>
      ))
    }
  </div>
);

SelectAccountForm.propTypes = {
  isAdmin: bool.isRequired,
  onSelect: func.isRequired,
  list: array.isRequired,
};

export default SelectAccountForm;
