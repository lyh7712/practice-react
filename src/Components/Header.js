import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${(props) => (props.current ? '#EBC73C' : 'transparent')};
`;

const SLink = styled(Link)`
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
