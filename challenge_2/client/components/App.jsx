import React from 'react';

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
      this.setState({ prices: results });
    });
  }

  render() {
    const { prices } = this.state;
    return <div>{JSON.stringify(prices)}</div>;
  }
}
