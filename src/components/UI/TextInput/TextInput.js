import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

/**
 * Simple text input component with flow-placeholder and mobile-ready
 */
export function TextInput({
  placeholder = 'Input placeholder',
  value = undefined,
  error = false,
  errorTip = 'Something went wrong',
  onChange = () => { console.error('onChange callback missed!') },
  customStylesContainer = {}
}) {
  const errorTipContainer = error
    ? (
      <div className={ `text-input__error-container` }>
        { errorTip }
      </div>
    )
    : null;

  return (
    <div className='text-input' style={ customStylesContainer }>
      <div className={ `text-input__inner${ error ? ' text-input__inner--error' : '' }` }>
        <input
          className={ `text-input__tag${ error ? ' text-input__tag--error' : '' }` }
          type='text'
          placeholder=' '
          defaultValue={ value }
          onInput={ event => onChange(event.target.value) }
        />
        <span className={ `text-input__placeholder${ error ? ' text-input__placeholder--error' : '' }` }>{ placeholder }</span>
      </div>
      { errorTipContainer }
    </div>
  );
}

TextInput.propTypes = {
  /**
   * Placeholder; not input-tag attribute!
   */
  placeholder: PropTypes.string,
  /**
   * Value; will be used in input-tag as defaultValue
   */
  value: PropTypes.string,
  /**
   * If passed in props, input will be marked as errored
   */
  error: PropTypes.bool,
  /**
   * Error text, can be string or another component
   */
  errorTip: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  /**
   * Callback, will be used as onInput at input-tag
   */
  onChange: PropTypes.func,
  /**
   * custom styles for main container, example: `{ maxWidth: 'unset' }`
   */
  customStylesContainer: PropTypes.object,
};