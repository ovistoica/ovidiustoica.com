import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {padding} from 'styled-system';

export const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${padding}

  a {
    padding: 0;
  }
`;

export const Title = styled.h1`
  color: ${themeGet('colors.mainText')};
`;

export const AccentTitle = styled.span`
  color: ${themeGet('colors.accent')};
`;
