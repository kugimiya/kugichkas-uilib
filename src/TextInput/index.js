import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';
import './TextInput.scss';

/**
 * Simple text input component with flow-placeholder and mobile-ready
 */
export function TextInput({
  placeholder = 'Input placeholder',
  value = undefined,
  disabled = false,
  error = false,
  errorTip = 'Something went wrong',
  onChange = () => console.error('onChange callback missed!'),
  customStylesContainer = {},
  tagType = 'text'
}) {
  const errorTipContainer = error
    ? (
      <div className='text-input__error-container'>
        { errorTip }
      </div>
    )
    : null;

  return (
    <div className='text-input' style={ customStylesContainer }>
      <div
        className={ classname({
          'text-input__inner': true,
          'text-input__inner--disabled': disabled,
          'text-input__inner--error': error
        }) }
      >
        <input
          className={ classname({
            'text-input__tag': true,
            'text-input__tag--disabled': disabled,
            'text-input__tag--error': error
          }) }
          type={ tagType }
          placeholder=' '
          defaultValue={ value }
          onInput={ event => onChange(event.target.value) }
          disabled={ disabled }
        />
        <span
          className={ classname({
            'text-input__placeholder': true,
            'text-input__placeholder--disabled': disabled,
            'text-input__placeholder--error': error
          }) }
        >{ placeholder }</span>
      </div>
      { errorTipContainer }
    </div>
  );
}

TextInput.propTypes = {
  /**
   * Placeholder; not input-tag attribute!
   */
  placeholder: PropTypes.node,
  /**
   * Value; will be used in input-tag as defaultValue
   */
  value: PropTypes.string,
  /**
   * If passed in props, input will be marked as disabled
   */
  disabled: PropTypes.bool,
  /**
   * If passed in props, input will be marked as errored
   */
  error: PropTypes.bool,
  /**
   * Error text, can be string or another component
   */
  errorTip: PropTypes.node,
  /**
   * Callback, will be used as onInput at input-tag
   */
  onChange: PropTypes.func,
  /**
   * custom styles for main container, example: `{ maxWidth: 'unset' }`
   */
  customStylesContainer: PropTypes.object,
  /**
   * use for extend input-tag type
   */
  tagType: PropTypes.string
};
