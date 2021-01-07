/* eslint-disable react/forbid-prop-types */
import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Nav, OverlayTrigger, Overlay, Tooltip,
} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { array } from 'prop-types';
import { getProfile } from '../../../service/auth';
import { authSignOut } from '../../../redux/reducers/auth';
import * as Style from './style';

function useOutsideAccountMenu({ ref, setShow }) {
  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  }, [ref]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}

const NavigationBar = ({ menuItems }) => {
  const dispatch = useDispatch();
  const accountRef = useRef(null);
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);
  const [profile, setProfile] = useState({});
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [subMenuTitle, setSubMenuTitle] = useState('');
  const [currentNavRoute, setCurrentNavRoute] = useState('');

  useOutsideAccountMenu({ ref: accountRef, setShow });

  useEffect(() => {
    setProfile(getProfile());
    if (subMenuItems.length > 0) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }, [subMenuItems]);

  return (
    <Style.NavigationBarContainer>
      <Style.NavBar>
        <Style.NavItems>
          {Array.isArray(menuItems) && menuItems.map((item) => (
            <OverlayTrigger
              key={item.title}
              placement="right"
              overlay={<Tooltip>{item.title}</Tooltip>}
            >
              <Style.NavItem>
                <Link
                  to={`${item.to}`}
                  onClick={() => {
                    setSubMenuItems(item.subMenu);
                    setSubMenuTitle(item.title);
                    setCurrentNavRoute(item.to);
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </Link>
              </Style.NavItem>
            </OverlayTrigger>
          ))}
        </Style.NavItems>
        {profile.display_picture && (
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>{profile.name ? profile.name : profile.email}</Tooltip>}
          >
            <Style.Account
              ref={accountRef}
              onClick={() => setShow(!show)}
              image={profile.display_picture}
            />
          </OverlayTrigger>
        )}
        {!profile.display_picture && (
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>{profile.name ? profile.name : profile.email}</Tooltip>}
          >
            <Style.Account
              ref={accountRef}
              onClick={() => setShow(!show)}
            >
              <FontAwesomeIcon icon={faUser} />
            </Style.Account>
          </OverlayTrigger>
        )}
        <Overlay target={accountRef.current} show={show} placement="right">
          <Style.AccountMenu>
            <Style.AccountMenuHeader>
              {profile.name ? profile.name : profile.email}
            </Style.AccountMenuHeader>
            <Link to="/app/account">
              <Style.AccountMenuItem
                onClick={() => {
                  setShow(false);
                  setSubMenuItems([]);
                  setSubMenuTitle('Account');
                  setCurrentNavRoute('/app/account');
                }}
              >
                Account
              </Style.AccountMenuItem>
            </Link>
            <Style.AccountMenuItem
              onClick={() => {
                setShow(false);
                dispatch(authSignOut());
              }}
            >
              Log out
            </Style.AccountMenuItem>
          </Style.AccountMenu>
        </Overlay>
      </Style.NavBar>
      <Style.SubNavBar className={expand ? 'expand' : ''}>
        {expand && <Style.SubNavBarTitle>{subMenuTitle}</Style.SubNavBarTitle>}
        {expand && (
          <Style.SubNavItems>
            {Array.isArray(subMenuItems) && subMenuItems.map((item) => (
              <Style.SubNavItem key={item}>
                <Nav.Link as={HashLink} to={`${currentNavRoute}#${item.replace(/\s/g, '-').toLowerCase()}`}>
                  {item}
                </Nav.Link>
              </Style.SubNavItem>
            ))}
          </Style.SubNavItems>
        )}
      </Style.SubNavBar>
    </Style.NavigationBarContainer>
  );
};

NavigationBar.propTypes = {
  menuItems: array.isRequired,
};

export default NavigationBar;
