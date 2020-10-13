import styled from 'styled-components';
import {height, margin, width} from 'styled-system';
import {themeGet} from '@styled-system/theme-get';

export const WorkWrapper = styled.section``;

export const HoverWrapper = styled.div.attrs(props => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  height: auto;
  cursor: pointer;
  

  .bottom-banner {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
    z-index: 9999;
  }

  &:hover {
    .bottom-banner {
      visibility: visible;
      opacity: 1;
    }

    .image-tags {
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
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;
  height: 100%;
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
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active {
  color: white;
}
.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before {
  transform: scaleY(1);
}


.image-tags {
  position: absolute;
  top: 0;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 50px;
  transition: visibility 0s, opacity 0.2s linear;
}
`;
