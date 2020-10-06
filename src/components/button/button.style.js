import styled from 'styled-components';
import {variant, alignItems, boxShadow, padding} from 'styled-system';
import {themeGet} from '@styled-system/theme-get';
import {base} from '../base';

const ButtonStyle = styled.button`
  /* button default style */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.buttonText', '#ffffff')};
  background-color: ${themeGet('colors.mainBrand', '#028489')};
  min-height: ${themeGet('heights.3', '48')}px;
  min-width: ${themeGet('widths.3', '48')}px;
  border-radius: ${themeGet('radius.0', '3')}px;
  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
  font-size: ${themeGet('fontSizes.3', '16')}px;
  line-height: 36px;
  font-weight: bold;
  padding-top: ${themeGet('space.1', '8')}px;
  padding-bottom: ${themeGet('space.1', '8')}px;
  padding-left: ${themeGet('space.4', '15')}px;
  padding-right: ${themeGet('space.4', '15')}px;
  border: 0;
  transition: all 0.3s ease;
  span.btn-text {
    padding-left: ${themeGet('space.1', '4')}px;
    padding-right: ${themeGet('space.1', '4')}px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:hover {
    background-color: ${props =>
      props.hoverColor
        ? props.hoverColor
        : themeGet('colors.hover', '#028489')};
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* When button on loading stage */
  &.is-loading {
    .btn-text {
      padding-left: ${themeGet('space.2', '8')}px;
      padding-right: ${themeGet('space.2', '8')}px;
    }
  }

  /* Style system support */
  ${alignItems}
  ${boxShadow}
  ${base}
  ${padding}
`;

// prop types can also be added from the style functions
ButtonStyle.propTypes = {
  ...alignItems.propTypes,
  ...boxShadow.propTypes,
  ...variant.propTypes,
};

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
