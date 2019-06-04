import React from 'react';

const Item = ({id, item, complete, itemClick}) => (
  <li
    style={ complete ? {...styles.grocery, ...styles.complete} : styles.grocery}
    onClick={() => itemClick(id) }
    >
      { item }
  </li>
);

const styles = {
  grocery: { cursor: 'pointer'},
  complete: { color: 'grey', textDecoration: 'line-through'}
}

export default Item;