import React from 'react';
import { Line } from 'react-chartjs-2';

export default ({ prices }) => {
  const labels = prices.map(price => price.date);
  const data = prices.map(price => price.value);
  const chartData = { labels, datasets: [{ data, label: 'Bitcoin Price' }] };
  return <Line data={chartData} />;
};
