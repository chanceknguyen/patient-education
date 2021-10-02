import React from 'react';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Game from '../components/Game.jsx';

function Earn(props) {

  const defaultGames = ["Memory"]

  return (
    <div>

    <Navbar credits={props.credits}/>
    <Header />
    <section className="py-5">
      {defaultGames.map(game => {
        return (
          <div>
            <Game game={game}/>
          </div>
          )
      })}
      </section>
      <Footer />
    </div>
  )
}

export default Earn;