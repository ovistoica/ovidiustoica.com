import styled from 'styled-components';
import {width, height, margin, color} from 'styled-system';

export const HoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  

  .bottom-banner {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
  }

  &:hover {
    .bottom-banner {
      visibility: visible;
      opacity: 1;
    }
  }

  ${width}
  ${height}
  ${margin}
  ${color}
`;
