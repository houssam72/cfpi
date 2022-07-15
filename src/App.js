import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Register from './components/pages/Register';
import ContactUs from './components/pages/ContactUs';
import QuiSommesNous from './components/pages/QuiSommesNous';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={QuiSommesNous} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/register' component={Register} />
          <Route path='/ContactUs' component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
