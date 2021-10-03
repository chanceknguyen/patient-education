import React, { useEffect } from 'react';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Quick_Med_Flash(props) {

    return (
        <div>

            <Navbar credits={props.credits}/>
            <Header />
            <div className="interacty_padding justify-content-center" style={{ position: "relative", padding: "99.5% 0 0 0" }}>
                <div className="interacty_wrapper" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <iframe style={{ border: "none", width: "100%", height: "100%" }} src="https://p.interacty.me/ec0183c3c8832e28/iframe.html">
                    </iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Quick_Med_Flash;