import React from 'react';

import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Dashboard(props) {
  return (
    <div className="dashboard">
      <Navbar credits={props.credits}/>
      <Header />
      <div className="text-center">
        <h1>Welcome Back {props.name}!</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard;