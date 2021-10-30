import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/section';
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding: 0px 10px;
`;

const CoinsPresenter = ({ coins, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {coins && coins.length > 0 && (
        <Section>
          {coins.map((coin) => (
            <div>
              <span>
                <strong>#{coin.rank}</strong>
              </span>
              <span>{coin.name}</span>/<span>{coin.symbol}</span>
            </div>
          ))}
        </Section>
      )}
    </Container>
  );

CoinsPresenter.propTypes = {
  coins: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default CoinsPresenter;
