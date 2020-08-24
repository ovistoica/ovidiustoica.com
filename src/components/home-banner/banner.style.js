import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';

export const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${themeGet('colors.mainText')};
  margin-bottom: 30px;
`;

export const AccentTitle = styled.span`
  color: ${themeGet('colors.accent')};
`;
