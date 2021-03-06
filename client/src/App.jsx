import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Marketplace from './pages/Marketplace.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Earn from './pages/Earn.jsx';
import Memory from './games/Memory.jsx';
import Quiz from './games/Quiz.jsx';
import Quick_Med_Flash from './games/Quick_Med_Flash.jsx';

function App() {

  const [name, setName] = useState();
  const [credits, setCredits] = useState();

  useEffect(() => {
    axios('/user')

      .then((response) => {
        setName(response.data.name);
        setCredits(response.data.credits);
      })

  }, []);

  function creditsAdd(amount) {
    axios.patch(`/creditsAdd/${amount}`)
    .then((response) => {
      setCredits(response.data.credits);
    }
    )
  }

  function creditsRemove(amount) {
    axios.patch(`/creditsRemove/${amount}`)
    .then((response) => {
      setCredits(response.data.credits);
    })
  }

  return (

    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard name={name} credits={credits} />
          </Route>
          <Route path='/marketplace'>

            <Marketplace name={name} credits={credits} creditsRemove={creditsRemove}/>

          </Route>
          <Route path='/earn'>
            <Earn name={name} credits={credits} creditsAdd={creditsAdd}/>
          </Route>
          <Route path='/memory'>
            <Memory name={name} credits={credits} creditsAdd={creditsAdd}/>
          </Route>
          <Route path='/quiz'>
            <Quiz name={name} credits={credits} creditsAdd={creditsAdd}/>
          </Route>
          <Route path='/quick_med_flash'>
            <Quick_Med_Flash name={name} credits={credits} creditsAdd={creditsAdd}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
