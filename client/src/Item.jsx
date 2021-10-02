import React from 'react';

function Item(props) {
  return (
    <div id="Item" style={{border: "solid"}}>
      <div id="title">{props.title}</div>
      <div id="description">{props.description}</div>
      <div id="price">{props.price}</div>
    </div>
  )
}

export default Item;