import React from 'react';
import CoinsPresenter from './CoinsPresenter';
import { getCoinDetail, getCoins } from '../../Components/api';

export default class extends React.Component {
  state = {
    coins: null,
    loading: true,
  };

  getCoins = async () => {
    try {
      const { data: coins } = await getCoins();
      this.setState({ coins });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount() {
    this.getCoins();
  }

  render() {
    return <CoinsPresenter {...this.state} />;
  }
}
