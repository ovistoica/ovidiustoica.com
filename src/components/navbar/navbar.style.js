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
  margin: 2px 12px 0px 12px;

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
