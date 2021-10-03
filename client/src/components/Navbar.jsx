import React from 'react';
import { Link } from 'react-router-dom'

import CoinIcon from '../../dist/assets/coin.svg';

function Navbar(props) {
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" >Patient Education</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-link"><Link className="nav-item" to="/">Dashboard</Link></li>
                        <li className="nav-link"><Link to="/earn">Earn</Link></li>
                        <li className="nav-link"><Link to="/marketplace">Marketplace</Link></li>
                    </ul>
                    <div className="d-flex">
                        <div className="btn btn-outline-dark" >
                            <img src={CoinIcon} alt="Coin Icon" />
                            &nbsp;Credits
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{props.credits}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;