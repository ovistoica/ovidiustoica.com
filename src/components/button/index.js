import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './button.style';
import {ic_arrow_forward} from 'react-icons-kit/md/ic_arrow_forward';
import {Icon} from 'react-icons-kit';

const Button = ({
  type,
  title,
  icon,
  disabled,
  iconPosition,
  onClick,
  loader,
  loaderColor,
  isMaterial,
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__button'];

  // isMaterial prop checking
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // set icon position
  const position = iconPosition || 'right';

  return (
    <ButtonStyle
      type={type}
      className={addAllClasses.join(' ')}
      icon={icon}
      disabled={disabled}
      icon-position={position}
      onClick={onClick}
      {...props}
    >
      {position === 'left' && icon}
      {title && <span className="button">{title}</span>}
      {position === 'right' && icon}
    </ButtonStyle>
  );
};

Button.propTypes = {
  /** ClassName of the button */
  className: PropTypes.string,

  /** Add icon */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: PropTypes.object,

  /** Add loader */
  loader: PropTypes.object,

  /** Add Material effect */
  isMaterial: PropTypes.bool,

  /** Button Loading state */
  isLoading: PropTypes.bool,

  /** Button Loading state */
  loaderColor: PropTypes.string,

  /** If true button will be disabled */
  disabled: PropTypes.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: PropTypes.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'error',
    'primaryWithBg',
    'secondaryWithBg',
    'warningWithBg',
    'errorWithBg',
  ]),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  type: 'button',
  icon: <Icon icon={ic_arrow_forward} size={24} />,
};

export default Button;
