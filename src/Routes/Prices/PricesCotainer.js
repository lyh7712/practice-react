import React from 'react';
import { getPrices } from '../../Components/api';
import PricesPresenter from './PricesPresenter';

export default class extends React.Component {
  state = {
    prices: [],
    loading: true,
  };

  async componentDidMount() {
    this.getPrices();
  }
  getPrices = async () => {
    try {
      const { data: prices } = await getPrices();
      this.setState({ prices });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { prices } = this.state;
    return <PricesPresenter {...this.state} />;
  }
}
