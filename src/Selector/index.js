import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './Selector.scss';

export function Selector({
  error = false,
  errorTip = 'Something went wrong',
  notSelectedTip = 'Not selected',
  disabled = false,
  fetching = false,
  multiple = false,
  placeholder = 'Selector placeholder',
  items = [],
  value = [],
  customStylesContainer = {},
  onChange = value => console.error('onChange callback missed, btw value is', value),
  FetchingComponent
}) {
  const [dropdownVisible, dropdownChangeVisibility] = useState(false);

  if (fetching) {
    if (FetchingComponent === undefined || FetchingComponent === null) {
      throw new Error('`FetchingComponent` should be passed!');
    }
  }

  const errorTipContainer = error
    ? (
      <div className='selector__error-container'>
        { errorTip }
      </div>
    )
    : null;

  const _handleOnChange = (id, flag) => {
    if (flag) {
      onChange(multiple ? [ ...value, id ] : [ id ]);
    } else {
      onChange(value.filter(_id => _id !== id));
    }
  };

  return (
    <div className='selector' style={ customStylesContainer }>
      <div
        className={ classname({
          'selector__inner': true,
          'selector__inner--error': error,
          'selector__inner--disabled': disabled,
          'selector__inner--dropdown-visible': dropdownVisible
        }) }
        onClick={ () => !disabled && dropdownChangeVisibility(!dropdownVisible) }
      >
        <div
          className={ classname({ 'selector__placeholder': true, 'selector__placeholder--error': error }) }
        >{ placeholder }</div>

        <div
          className={ classname({ 'selector__value': true, 'selector__value--exist': value.length > 0 }) }
        >
          { value.length > 0 ? items.filter(i => value.includes(i.id)).map(i => i.text).join(', ') : notSelectedTip }
        </div>
      </div>

      <div
        className={ classname({ 'selector__dropdown': true, 'selector__dropdown--visible': dropdownVisible }) }
      >
        {
          items.length
            ? items.map(item => (
              <div
                key={ item.id }
                className={ classname({ 'selector__dropdown-item': true, 'selector__dropdown-item--active': value.includes(item.id) }) }
                onClick={ () => _handleOnChange(item.id, !value.includes(item.id)) }
              >
                { item.text }
              </div>
            ))
            : fetching
              ? <FetchingComponent />
              : <span>Нет данных</span>
        }
      </div>

      { errorTipContainer }
    </div>
  );
}

Selector.propTypes = {
  error: PropTypes.bool,
  errorTip: PropTypes.node,
  disabled: PropTypes.bool,
  fetching: PropTypes.bool,
  multiple: PropTypes.bool,
  placeholder: PropTypes.node,
  items: PropTypes.array,
  value: PropTypes.array,
  FetchingComponent: PropTypes.func,
  notSelectedTip: PropTypes.node
};
