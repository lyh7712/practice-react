import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/section';
import Loader from '../../Components/Loader';

const Conatiner = styled.div`
  padding: 0px 10px;
`;

const PricesPresenter = ({ tickers, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Conatiner>
      {tickers && tickers.length > 0 && (
        <Section>
          {tickers.map((coin) => (
            <div>
              {coin.name} /{coin.symbol}: ${coin.beta_value}
            </div>
          ))}
        </Section>
      )}
    </Conatiner>
  );

PricesPresenter.propTypes = {
  tickers: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default PricesPresenter;
