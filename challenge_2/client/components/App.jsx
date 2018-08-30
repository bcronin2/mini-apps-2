import React from 'react';
import PriceChart from './PriceChart.jsx';
import 'datejs';

import coinDesk from '../API/coinDeskAPI.js';

const TODAY = Date.today().toString('yyyy-MM-dd');
const WEEK_AGO = Date.today()
  .addWeeks(-1)
  .toString('yyyy-MM-dd');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: WEEK_AGO,
      endDate: TODAY,
      prices: {}
    };
    this.updateDates = this.updateDates.bind(this);
  }

  componentDidMount() {
    this.getPrices();
  }

  updateDates(startDate, endDate) {
    this.setState({ startDate, endDate });
  }

  getPrices() {
    const { startDate, endDate } = this.state;
    console.log(startDate);
    coinDesk.getPriceHistory(startDate, endDate, results => {
      const prices = results.data.bpi;
      this.setState({ prices });
    });
  }

  render() {
    const { prices } = this.state;
    return (
      <div>
        {/* <DateSelection handleUpdate={this.updateDates} /> */}
        <PriceChart prices={prices} />
      </div>
    );
  }
}
