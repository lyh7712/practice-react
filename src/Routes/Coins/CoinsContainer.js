import React from 'react';
import CoinsPresenter from './CoinsPresenter';
import { coinsInfo } from '../../Components/api';

export default class extends React.Component {
  state = {
    coins: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data: coins } = await coinsInfo.coins();
      this.setState({ coins });
    } catch {
      this.setState({ error: "Can't find coinInfo" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { coins, error, loading } = this.state;
    return <CoinsPresenter coins={coins} error={error} loading={loading} />;
  }
}
