import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';

export const CardWrapper = styled.div`
  border: 1px solid ${themeGet('colors.borderColor')};
  background-color: ${themeGet('colors.background')};
`;

export const ImageWrapper = styled.div`
  background-color: #c4c4c4;
  display: flex;
  flex: 0.5;
  width: 100%;
`;
