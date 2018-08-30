import React from 'react';
import PriceChart from './PriceChart.jsx';

import coinDesk from '../API/coinDeskAPI.js';

const startDate = '2018-04-22';
const endDate = '2018-08-22';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: {}
    };
  }

  componentDidMount() {
    coinDesk.getPriceHistory(startDate, endDate, results => {
      const prices = results.data.bpi;
      this.setState({ prices });
    });
  }

  render() {
    const { prices } = this.state;
    return <PriceChart prices={prices} />;
  }
}
