import React from 'react';
import Chart from 'chart.js';

const makePriceChart = (ctx, data) => {
  const priceChart = new Chart(ctx, data);
};

export default class PriceChart extends React.Component {}
