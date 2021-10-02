import React from 'react';
import { Link } from 'react-router-dom'

import CoinIcon from '../../dist/assets/coin.svg';

function Navbar(props) {
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Patient Education</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-link"><Link to="/">Dashboard</Link></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Earn</a></li>
                        <li className="nav-link"><Link to="/marketplace">Marketplace</Link></li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <img src={CoinIcon} alt="Coin Icon" />
                            &nbsp;Credits
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{props.credits}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;