import { getCoinDetail } from '../../Components/api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    result: null,
    loading: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data: result } = await getCoinDetail(id);
      this.setState({ result });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, loading } = this.state;
    return <DetailPresenter loading={loading} {...result} />;
  }
}
