import styled from 'styled-components';
import {height, margin, width} from 'styled-system';
import {themeGet} from '@styled-system/theme-get';

export const WorkWrapper = styled.section``;

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

  /* Sweep To Bottom */
.hvr-sweep-to-bottom {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-sweep-to-bottom:before {
  content: "";
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${themeGet('colors.hoverFaded')};
  transform: scaleY(0);
  transform-origin: 50% 0;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}
.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active {
  color: white;
}
.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before {
  transform: scaleY(1);
}
`;
