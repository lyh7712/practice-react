import { React } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';
import Exchange from '../../Components/Exchanges';

const ExchangesPresenter = ({ exchanges, loading }) =>
  loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );

ExchangesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      linsk: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired),
      }),
    }).isRequired
  ).isRequired,
};

export default ExchangesPresenter;
