import React from 'react';
import { Line } from 'react-chartjs-2';

export default ({ prices }) => {
  const labels = Object.keys(prices);
  const data = Object.values(prices);
  const chartData = { labels, datasets: [{ data, label: 'Bitcoin Price' }] };
  return <Line data={chartData} />;
};
