import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Coins from '../Screens/Coins';
import Prices from '../Screens/Prices';
import Exchanges from '../Screens/Exchanges';
import Header from './Header';

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Route path='/' exact component={Prices} />
        <Route path='/exchanges' exact component={Exchanges} />
        <Route path='/coins' exact component={Coins} />
      </>
    </Router>
  );
};
