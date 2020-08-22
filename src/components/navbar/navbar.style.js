import styled from 'styled-components';
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
  padding,
} from 'styled-system';

export const NavbarStyle = styled.nav`
  padding: 16px 0px 16px 0px;
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 72px;
  align-items: center;
  max-width: 1216px;
  margin-left: auto;
  margin-right: auto;

  a {
    /* NavItem */
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: ${props => props.theme.colors.mainBrand};
    padding: 8px 12px 8px 12px;
    transition: 0.4s;

    &:hover {
      color: ${props => props.theme.colors.mainText};
      transition: 0.4s;
    }
  }

 

  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${boxShadow}
  ${color}
  ${space}
  ${borderRadius}
  ${width}
  ${height}
  ${padding}
`;

export const CallToAction = styled.div`
  border: 1px solid;
  color: ${props => props.theme.colors.mainBrand};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px 5px 10px;
  transition: 0.4s;
  margin: 0px 12px 8px 12px;
  margin-bottom: calc(1.45rem / 2);

  a {
    margin-right: 10px;
    padding: 0px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.mainBrand};
    a,
    i {
      color: ${props => props.theme.colors.buttonText};
    }
    transition: 0.4s;
  }
`;

NavbarStyle.displayName = 'NavbarStyle';
