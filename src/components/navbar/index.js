import React from 'react';
import styled, {css} from 'styled-components';
import Burger from './burger';
import {Link} from 'gatsby';
import {padding, width} from 'styled-system';
import Text from '../text';

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.99);
  z-index: 98;
  max-width: 100%;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    height: 50px;
  }

  ${padding}
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${props =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 30px;
      padding-right: 30px;
    `};
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1220px) {
    max-width: ${props => props.width || '1170px'};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${props =>
      props.mobileGutter &&
      css`
        padding-left: 30px;
        padding-right: 30px;
      `};
  }

  ${width}
`;

const Navbar = ({logo}) => {
  return (
    <Nav>
      <NavContainer width="1200px" noGutter>
        <Link href="/" style={logo}>
          <Text as="h1" content="Ov" color="mainText" mb="0px" />
          <Text as="h1" content="S" color="accent" mb="0px" />
        </Link>
        <Burger />
      </NavContainer>
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
