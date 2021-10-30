import React from 'react';
import GlobalStyles from './GlobalStyles';
import Router from './Router';

function App() {
  return (
    <div>
      <h1>Coin Explorer</h1>
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
