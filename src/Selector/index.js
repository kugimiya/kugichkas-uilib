import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './Selector.scss';

export function Selector({
  error = false,
  errorTip = 'Something went wrong',
  disabled = false,
  fetching = false,
  multiple = false,
  placeholder = 'Selector placeholder',
  items = [],
  value = [],
  customStylesContainer = {},
  onChange = value => console.error('onChange callback missed, btw value is', value),
  CheckboxComponent,
  BlockComponent,
  FetchingComponent
}) {
  if (CheckboxComponent === undefined || CheckboxComponent === null) {
    throw new Error('`CheckboxComponent` should be passed!');
  }

  if (BlockComponent === undefined || BlockComponent === null) {
    throw new Error('`BlockComponent` should be passed!');
  }

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
    <div
      className={ classname({
        selector: true,
        'selector--error': error,
        'selector--disabled': disabled,
        'selector--fetching': fetching,
      }) }
      style={ customStylesContainer }
    >
      <BlockComponent
        className={ classname({
          selector__block: true,
          'selector__block--error': error,
          'selector__block--disabled': disabled,
          'selector__block--fetching': fetching,
        }) }
        title={ placeholder }
      >
        { fetching
          ? <FetchingComponent />
          : items.map((item, index) => (
            <CheckboxComponent
              key={ item.id }
              active={ value.includes(item.id) }
              onChange={ value => _handleOnChange(item.id, value) }
              disabled={ disabled }
              customStylesContainer={ { marginBottom: items.length - 1 === index ? '' : '10px' } }
            >
              { item.text || item.name || item.title }
            </CheckboxComponent>
          ))
        }
      </BlockComponent>
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
  CheckboxComponent: PropTypes.node.isRequired,
  BlockComponent: PropTypes.node.isRequired,
  FetchingComponent: PropTypes.node
};
