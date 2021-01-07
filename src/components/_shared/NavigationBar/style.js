import styled from 'styled-components';

export const NavigationBarContainer = styled.div`
  display: flex;
  height: 100vh;
  .expand {
    width: 250px;
  }
`;

export const NavBar = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0595d6;
`;

export const NavItems = styled.nav`
  width: 50px;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: transparent;
  > a {
    display: inline-block;
    padding: 0;
    width: 50px;
    line-height: 50px;
    text-decoration: none;
    color: white;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const SubNavBar = styled.div`
  width: 10px;
  display: flex;
  flex-direction: column;
  transition: all ease 300ms;
  background-color: rgba(27, 174, 255, .76);
`;

export const SubNavBarTitle = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  color: white;
  font-family: Roboto;
  font-size: 14pt;
  font-weight: bold;
`;

export const SubNavItems = styled.nav`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const SubNavItem = styled.div`
  width: 100%;
  height: 50px;
  background-color: transparent;
  > a {
    line-height: 50px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    text-decoration: none;
    color: white;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Account = styled.div`
  margin: 10px 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(85, 85, 85, .4);
  ${(props) => {
    if (props.image) {
      return `background-image: url(${props.image})`;
    }
    return '';
  }}
`;

export const AccountMenu = styled.div`
  margin-left: 10px;
  width: 200px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: white;
  display: flex;
  flex-direction: column;
  > a {
    line-height: 40px;
    width: 100%;
    text-decoration: none;
    color: black;
  }
`;

export const AccountMenuItem = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  line-height: 40px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 200;
  color: black;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const AccountMenuHeader = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  color: black;
`;
