import React from 'react';
import GlobalStyles from './GlobalStyles';
import Router from './Router';
import Styled from 'styled-components';

const Title = Styled.h1`
  font-size: 28px;
  padding-left: 23px;
`;

function App() {
  return (
    <div>
      <Title>Coin Explorer</Title>
      <Router />
      <GlobalStyles />
    </div>
  );
}

export default App;
