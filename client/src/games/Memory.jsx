import React, { useEffect } from 'react';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Memory() {

  useEffect(() => {
    console.log('found')
  }, [document.getElementsByClassName("final-screen is-win")])


  // const targetNode = document.getElementsByClassName("memory cards");
  // const config = { attributes: true, childList: true, subtree: true };

  //   // Callback function to execute when mutations are observed
  // const callback = function(mutationsList, observer) {
  //   // Use traditional 'for loops' for IE 11
  //   for(const mutation of mutationsList) {
  //       if (mutation.type === 'childList') {
  //           console.log('A child node has been added or removed.');
  //       }
  //       else if (mutation.type === 'attributes') {
  //           console.log('The ' + mutation.attributeName + ' attribute was modified.');
  //       }
  //   }
  // };

  // // Create an observer instance linked to the callback function
  // const observer = new MutationObserver(callback);

  // // Start observing the target node for configured mutations
  // observer.observe(targetNode, config);

  return (
    <div>

      <Navbar />
      <Header />
      <div className="interacty_padding justify-content-center" style={{ position: "relative", padding: "99.5% 0 0 0" }}>
        <div className="interacty_wrapper" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <iframe style={{ border: "none", width: "100%", height: "100%" }} src="https://p.interacty.me/49dfa061048bedeb/iframe.html">
          </iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Memory;