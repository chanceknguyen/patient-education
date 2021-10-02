import React from 'react';
import Item from './Item.jsx';

function Marketplace() {


  const defaultItems =
    [
      {
        "title" : "Ice Cream",
        "description" : "yummy frozen treat",
        "price" : 5
      },
      {
        "title" : "Socks",
        "description" : "warm, fuzzy foot warmers",
        "price" : 10
      },
      {
        "title" : "McDonalds",
        "description" : "food that is not good for you",
        "price" : 15
      }
    ]


  return (
    <div>
      <div>Welcome to the Marketplace</div>
      <div>
        {defaultItems.map(item => {
          return (
            <Item
              title={item.title}
              description={item.description}
              price={item.price}>
            </Item>)
        })}
      </div>
    </div>
  )
}

export default Marketplace;