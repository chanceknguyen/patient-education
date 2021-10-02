import React from 'react';

function Item(props) {
  return (
    <div className="col mb-5">
      <div className="card h-100">

      <img className="card-img-top" src={props.image} alt="..." />

      <div className="card-body p-4">
          <div className="text-center">

              <h5 className="fw-bolder">{props.title}</h5>

              {props.price}
          </div>
      </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Redeem</a></div>
        </div>
      </div>
    </div>
  )
}


export default Item;