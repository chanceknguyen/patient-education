import React from 'react';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Memory() {
  return(
    <div>

    <Navbar />
    <Header />
    <div className="interacty_padding justify-content-center" style={{position: "relative", padding: "99.5% 0 0 0"}}>
      <div className="interacty_wrapper" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
      <iframe style={{border: "none", width: "85%", height: "85%"}} src="https://p.interacty.me/49dfa061048bedeb/iframe.html">
      </iframe>
      </div>
    </div>
    <Footer />
    </div>
  )
};

export default Memory;