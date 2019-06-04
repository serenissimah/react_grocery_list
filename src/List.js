
import React from 'react'
import Item from './Item'

const List = ({items, item, itemClick }) => (
  <div>
    <h2>{item}</h2>
    <ul>
      { items.map( item => <Item key={item.id} {...item} itemClick = {itemClick} /> )}    
    </ul>
  </div>
)

export default List;