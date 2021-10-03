import React from 'react';

function Item(props) {

  function redeem() {
    if (props.price > props.credits) {
      alert("Sorry you do not have enough credits!");
    } else {
      alert(`You have succesfully redeemed ${props.title} for ${props.price} credits!`);
      props.creditsRemove(props.price);
    }
  }

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={props.image} alt="..." />
         <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.title}</h5>
              {props.price} Credits
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center" onClick={(e) => redeem()}><a className="btn btn-outline-dark mt-auto" href="#">Redeem</a></div>
        </div>
      </div>
    </div>
  )
}


export default Item;