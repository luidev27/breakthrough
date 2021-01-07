import { createSelector } from 'reselect';

const authDomain = (state) => state.auth;
const userDomain = (state) => state.user;
const accountDomain = (state) => state.account;
const packageDomain = (state) => state.package;

const makeSelectAuthLoading = () => createSelector(
  authDomain,
  (subdomain) => subdomain.isLoading,
);

const makeSelectAuthError = () => createSelector(
  authDomain,
  (subdomain) => subdomain.error,
);

const makeSelectAuthData = () => createSelector(
  authDomain,
  (subdomain) => subdomain.data,
);

const makeSelectSignInStep = () => createSelector(
  authDomain,
  (subdomain) => subdomain.signInStep,
);

const makeSelectRegisterStep = () => createSelector(
  authDomain,
  (subdomain) => subdomain.registerStep,
);

const makeSelectUser = () => createSelector(
  userDomain,
  (subdomain) => subdomain.user,
);

const makeSelectUsers = () => createSelector(
  userDomain,
  (subdomain) => subdomain.users,
);

const makeSelectUserError = () => createSelector(
  userDomain,
  (subdomain) => subdomain.error,
);

const makeSelectUserLoading = () => createSelector(
  userDomain,
  (subdomain) => subdomain.isLoading,
);

const makeSelectAccountLoading = () => createSelector(
  accountDomain,
  (subdomain) => subdomain.isLoading,
);

const makeSelectAccountError = () => createSelector(
  accountDomain,
  (subdomain) => subdomain.error,
);

const makeSelectAccount = () => createSelector(
  accountDomain,
  (subdomain) => subdomain.account,
);

const makeSelectAccounts = () => createSelector(
  accountDomain,
  (subdomain) => subdomain.accounts,
);

const makeSelectPackages = () => createSelector(
  packageDomain,
  (subdomain) => subdomain.packages,
);

const makeSelectPackage = () => createSelector(
  packageDomain,
  (subdomain) => subdomain.package,
);

const makeSelectPackageLoading = () => createSelector(
  packageDomain,
  (subdomain) => subdomain.isLoading,
);

const makeSelectPackageError = () => createSelector(
  packageDomain,
  (subdomain) => subdomain.error,
);

export {
  makeSelectAuthLoading,
  makeSelectAuthData,
  makeSelectSignInStep,
  makeSelectRegisterStep,
  makeSelectAuthError,
  makeSelectUser,
  makeSelectUsers,
  makeSelectUserLoading,
  makeSelectUserError,
  makeSelectAccountLoading,
  makeSelectAccountError,
  makeSelectAccount,
  makeSelectAccounts,
  makeSelectPackages,
  makeSelectPackage,
  makeSelectPackageLoading,
  makeSelectPackageError,
};
