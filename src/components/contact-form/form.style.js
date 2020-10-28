import {themeGet} from '@styled-system/theme-get';
import styled from 'styled-components';

export const FormWrapper = styled.section`
  padding: 80px 0px 80px 0px;

  .submit-button {
    margin-top: 50px;
    min-width: 60px;
    width: 30%;
  }

  .contact-input {
    position: relative;
    margin-bottom: 20px;

    /* Input field wrapper */
    .field-wrapper {
      position: relative;
    }
  }

  /* Label default style */
  label {
    font-family: 'itc-avant-garde-gothic-pro', sans-serif;
    display: block;
    color: ${themeGet('colors.secondaryText', '#767676')};
    font-size: ${themeGet('fontSizes.0', '16')}px;
    font-weight: ${themeGet('fontWeights.5', '500')};
    margin-bottom: 2px;
    transition: 0.2s ease all;
  }

  /* Input and textarea default style */
  textarea,
  input {
    font-size: 22px;
    padding: 11px;
    display: block;
    width: 100%;
    color: ${themeGet('colors.secondaryText', '#484848')};
    box-shadow: none;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid ${themeGet('colors.borderColor', '#ebebeb')};
    transition: border-color 0.2s ease;
    &:focus {
      outline: none;
      border-color: ${themeGet('colors.mainBrand', '#028489')};
    }
    margin-bottom: 10px;
  }

  textarea {
    min-height: 150px;
  }

  /* Input material style */
  &.is-material {
    label {
      position: absolute;
      left: 0;
      top: 10px;
    }

    input,
    textarea {
      border-radius: 0;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      padding-left: 0;
      padding-right: 0;
    }

    textarea {
      min-height: 40px;
      padding-bottom: 0;
    }

    .highlight {
      position: absolute;
      height: 1px;
      top: auto;
      left: 50%;
      bottom: 0;
      width: 0;
      pointer-events: none;
      transition: all 0.2s ease;
    }

    /* If input has icon then these styel */
    &.icon-left,
    &.icon-right {
      .field-wrapper {
        flex-direction: row-reverse;
        > .input-icon {
          width: auto;
        }
        > input {
          flex: 1;
        }
      }
    }

    /* When icon position in left */
    &.icon-left {
      .field-wrapper {
        > input {
          padding-left: 20px;
        }
      }
      label {
        top: -15px;
        font-size: 12px;
      }
    }

    /* When icon position in right */
    &.icon-right {
      .field-wrapper {
        > input {
          padding-right: 20px;
        }
      }
    }

    /* Material input focus style */
    &.is-focus {
      input {
        border-color: ${themeGet('colors.inactiveIcon', '#ebebeb')};
      }

      label {
        top: -16px;
        font-size: 12px;
        color: ${themeGet('colors.textColor', '#484848')};
      }

      .highlight {
        width: 100%;
        height: 2px;
        background-color: ${themeGet('colors.primary', '#028489')};
        left: 0;
      }
    }
  }
`;
