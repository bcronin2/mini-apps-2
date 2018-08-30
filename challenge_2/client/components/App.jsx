import React from 'react';

import coinDesk from '../API/coinDeskAPI.js';
import chart from '../chart';

const startDate = '2018-04-22';
const endDate = '2018-08-22';

const CHART_ID = 'price-chart';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    coinDesk.getPriceHistory(startDate, endDate, results => {
      const priceObject = results.data.bpi;
      chart.makePriceChart(CHART_ID, priceObject);
    });
  }

  render() {
    return <canvas id={CHART_ID} />;
  }
}
