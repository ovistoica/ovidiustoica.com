import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import {themeGet} from '@styled-system/theme-get';
import Icon from 'react-icons-kit';
import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100px;
  li {
    padding: 5px 10px;

    a {
      color: ${themeGet('colors.mainBrand')};
      font-size: 20px;
      font-weight: 500;
      &:hover {
        color: ${props => props.theme.colors.mainText};
        transition: 0.4s;
      }
    }

    &:last-child {
      border: 1px solid ${themeGet('colors.mainBrand')};

      &:hover {
        background-color: ${props => props.theme.colors.mainBrand};
        a,
        i {
          color: ${props => props.theme.colors.buttonText};
        }
        transition: 0.4s;
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${themeGet('colors.background')};
    z-index: 99;
    position: fixed;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({open}) => {
  const arrow = <Icon icon={ic_arrow_forward} size={24} />;
  return (
    <Ul open={open}>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/work">Work</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Start your project {arrow}</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
