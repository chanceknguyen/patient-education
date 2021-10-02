import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Marketplace from './pages/Marketplace.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {

  const [name, setName] = useState("Bob");
  const [credits, setCredits] = useState(7);

  useEffect(() => {
    axios('/user')
    .then((response) => {
      setName(response.data.name);
      setCredits(response.data.credits);
    })
  }, []);

  return (

    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard name={name} credits={credits}/>
          </Route>
          <Route path='/marketplace'>
            <Marketplace name={name} credits={credits}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;