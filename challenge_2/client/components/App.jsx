import React from 'react';
import 'datejs';

import PriceChart from './PriceChart.jsx';
import DateSelection from './DateSelection.jsx';

// import coinDesk from '../API/coinDeskAPI.js';
import coinCompare from '../API/coinCompareAPI.js';

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
      prices: []
    };
    this.updateDates = this.updateDates.bind(this);
  }

  componentDidMount() {
    this.getPrices();
  }

  updateDates(startDate, endDate) {
    this.setState({ startDate, endDate }, this.getPrices);
  }

  getPrices() {
    const { startDate, endDate } = this.state;
    coinCompare.getPriceHistory(startDate, endDate, prices => {
      this.setState({ prices });
    });
  }

  render() {
    const { startDate, endDate, prices } = this.state;
    return (
      <div>
        <DateSelection
          startDate={startDate}
          endDate={endDate}
          handleUpdate={this.updateDates}
        />
        <PriceChart prices={prices} />
      </div>
    );
  }
}
