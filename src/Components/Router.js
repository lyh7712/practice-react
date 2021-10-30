import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Coins from '../Routes/Coins';
import Prices from '../Routes/Prices';
import Exchanges from '../Routes/Exchanges';
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
