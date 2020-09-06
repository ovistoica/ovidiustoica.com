import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {width} from 'styled-system';

export const NumbersShowcaseWrapper = styled.div`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
  transform: translateY(-4rem);
  padding: 1rem 0rem;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${themeGet('colors.background')};

  ${width}
`;
