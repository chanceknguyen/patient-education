import React from 'react';
import Item from '../components/Item.jsx';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Marketplace(props) {

  const defaultItems =
    [
      {
        "title" : "Ice Cream",
        "image" : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        "price" : 5
      },
      {
        "title" : "Socks",
        "image" : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        "price" : 10
      },
      {
        "title" : "McDonalds",
        "image" : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        "price" : 15
      }
    ]


  return (

    <div>
      <Navbar credits={props.credits}/>
      <Header />
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {defaultItems.map(item => {
          return (
            <Item
              title={item.title}
              image={item.image}
              price={item.price}
              key={item.title}>
            </Item>)
        })}
        </div>
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default Marketplace;