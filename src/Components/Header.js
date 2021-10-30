import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Styled from 'styled-components';

const Header = Styled.header`
  width: 100%;
  height: 50px;
`;

const List = Styled.ul`
  display: flex;
`;

const Item = Styled.li`
  width: 95px;
  height: 40px;
  font-weight: bold;
  text-align: center;
  margin: 6px;
  background-color: ${(props) => (props.current ? '#EBC73C' : 'transparent')};
`;

const SLink = Styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to='/'>Prices</SLink>
      </Item>
      <Item current={pathname === '/exchanges'}>
        <SLink to='/exchanges'>Exchanges</SLink>
      </Item>
      <Item current={pathname === '/coins'}>
        <SLink to='/coins'>Coins</SLink>
      </Item>
    </List>
  </Header>
));
