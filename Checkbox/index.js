import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';
import './Checkbox.scss';

/**
 * Simple checkbox component
 */
export default function Checkbox({
  active = false,
  disabled = false,
  error = false,
  errorTip = 'Что-то пошло не так',
  customStylesContainer = {},
  children = 'Index text',
  onChange = () => { console.error('onChange callback missed!') },
}) {
  const errorTipContainer = error
    ? (
      <div className={ `checkbox__error-container` }>
        { errorTip }
      </div>
    )
    : null;

  return (
    <div className='checkbox' style={ customStylesContainer }>
      <label
        className={ classname({
          checkbox__inner: true,
          'checkbox__inner--disabled': disabled,
          'checkbox__inner--active': active,
          'checkbox__inner--error': error
        }) }
      >
        <input
          className='checkbox__tag'
          type='checkbox'
          checked={ active }
          disabled={ disabled }
          onChange={ onChange }
        />
        <span className='checkbox__content'>{ children }</span>
      </label>
      { errorTipContainer }
    </div>
  );
}

Checkbox.propTypes = {
  /**
   * Checked flag
   */
  active: PropTypes.bool,
  /**
   * Disabled flag
   */
  disabled: PropTypes.bool,
  /**
   * Error flag
   */
  error: PropTypes.bool,
  /**
   * Error tip
   */
  errorTip: PropTypes.node,
  /**
   * Custom styles for main container
   */
  customStylesContainer: PropTypes.object,
  /**
   * Label of checkbox
   */
  children: PropTypes.node,
  /**
   * onChange listener
   */
  onChange: PropTypes.func
};
