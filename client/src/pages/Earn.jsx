import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import birdImage from '../../dist/assets/ab.jpeg';
import quizImage from '../../dist/assets/quiz.png';
import quickImage from '../../dist/assets/quick_med_flash.png';

function Earn(props) {

  return (
    <div>

      <Navbar credits={props.credits} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            <div className="col mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <img className="card-img-top" src={birdImage} alt="..." />
                  <div className="text-center">
                    <h5 className="fw-bolder">Memory</h5>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><Link to="/memory" className="btn btn-outline-dark mt-auto">Play</Link></div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <img className="card-img-top" src={quizImage} alt="..." />
                  <div className="text-center">
                    <h5 className="fw-bolder">ADHD Quiz</h5>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><Link to="/quiz" className="btn btn-outline-dark mt-auto">Play</Link></div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <img className="card-img-top" src={quickImage} alt="..." />
                  <div className="text-center">
                    <h5 className="fw-bolder">Quick-Med-Flash</h5>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><Link to="/quick_med_flash" className="btn btn-outline-dark mt-auto">Play</Link></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Earn;