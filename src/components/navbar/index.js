import React from 'react';
import styled from 'styled-components';
import Burger from './burger';
import {Link} from 'gatsby';
import Text from '../text';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.99);
  z-index: 98;
  max-width: 1200px;
  align-self: center;

  margin-left: auto;
  margin-right: auto;

  /* @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: '1200px';
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  } */
`;

const Navbar = ({logo}) => {
  return (
    <Nav>
      <Link href="/" style={logo}>
        <Text className="page-title" content="Log" color="mainText" mb="0px" />
        <Text className="page-title" content="o" color="accent" mb="0px" />
      </Link>
      <Burger />
    </Nav>
  );
};

Navbar.defaultProps = {
  logo: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export default Navbar;
