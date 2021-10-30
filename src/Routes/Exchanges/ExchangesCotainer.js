import React from 'react';
import ExchangesPresenter from './ExchangesPresenter';
import { coinsInfo } from '../../Components/api';

export default class extends React.Component {
  state = {
    exchanges: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data: exchanges } = await coinsInfo.exchanges();
      this.setState({ exchanges });
    } catch {
      this.setState({ error: "Can't find coinInfo" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { exchanges, error, loading } = this.state;
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        loading={loading}
      />
    );
  }
}
