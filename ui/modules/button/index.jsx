import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import button from './base/index.scss';

const Button = props => {
  const {
    variant,
    size,
    use,
    children,
    disabled,
    position,
    shadow,
    customization,
    ariaControls,
    ariaExpanded
  } = props;

  const css = rollupAdoptedStylesheets([common, button, customization]);

  const variantClassName = {
    'lwc-button': variant !== 'reset',
    'lwc-button_brand': variant === 'brand',
    'lwc-button_brand-outline': variant === 'brand-outline',
    'lwc-button_destructive': variant === 'destructive',
    'lwc-button_destructive-text': variant === 'destructive-text',
    'lwc-button_inverse': variant === 'inverse',
    'lwc-button_neutral': variant === 'neutral',
    'lwc-button_success': variant === 'success'
  };

  const sizeClassName = {
    'lwc-button_full-width': size === 'full-width'
  };

  const positionClassName = {
    'lwc-button_start': position === 'start',
    'lwc-button_end': position === 'end'
  };

  const computedClassNames = classNames(
    variantClassName,
    sizeClassName,
    positionClassName
  );

  const renderLeftIcon = () => {
    if (!props.leftIcon) return;
    return <span className="lwc-button__icon-left">{props.leftIcon}</span>;
  };

  const renderRightIcon = () => {
    if (!props.rightIcon) return;
    return <span className="lwc-button__icon-right">{props.rightIcon}</span>;
  };

  return (
    <Shadow.on name="button" includes={css} shadow={shadow}>
      <React.Fragment>
        {use === 'a' ? (
          <a className={computedClassNames} href="javascript:void(0);">
            {renderLeftIcon()}
            {children}
            {renderRightIcon()}
          </a>
        ) : (
          <button
            className={computedClassNames}
            disabled={disabled}
            aria-controls={ariaControls}
            aria-expanded={ariaExpanded}
          >
            {renderLeftIcon()}
            {children}
            {renderRightIcon()}
          </button>
        )}
      </React.Fragment>
    </Shadow.on>
  );
};

Button.propTypes = {
  // Slots
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  // Attributes
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['full-width']),
  position: PropTypes.oneOf(['start', 'end']),
  use: PropTypes.oneOf(['a', 'button']),
  variant: PropTypes.oneOf([
    'brand',
    'brand-outline',
    'destructive',
    'destructive-text',
    'inverse',
    'neutral',
    'reset',
    'success'
  ]),
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.bool
};

Button.defaultProps = {
  use: 'button'
};

// createElement("button", css);
// customElements.define("lightning-button", constructor["button"]); // eslint-disable-line no-undef

export default Button;
