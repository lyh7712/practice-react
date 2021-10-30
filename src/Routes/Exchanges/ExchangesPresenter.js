import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/section';
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding: 0px 10px;
`;

const ExchangesPresenter = ({ exchanges, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges && exchanges.length > 0 && (
        <Section>
          {exchanges.map((coin) => (
            <div>
              <span>{coin.name}</span>
              <p>{coin.description}</p>
            </div>
          ))}
        </Section>
      )}
    </Container>
  );

ExchangesPresenter.propTypes = {
  exchanges: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default ExchangesPresenter;
