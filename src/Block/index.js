import React from 'react';
import PropTypes from 'prop-types';
import './Block.scss';

export function Block ({
  className = '',
  style = {},
  title = undefined,
  children
}) {
  return (
    <div className={ `light-block ${ className }` } style={ style }>
      { title !== undefined
        ? <BlockTitle>{ title }</BlockTitle>
        : null
      }
      { children }
    </div>
  );
}

Block.propTypes = {
  title: PropTypes.node,
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};

export function BlockTitle ({ children }) {
  return (
    <span className='light-block__title'>{ children }</span>
  );
}

BlockTitle.propTypes = {
  children: PropTypes.node
};
