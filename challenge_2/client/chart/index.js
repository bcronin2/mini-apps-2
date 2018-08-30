import Chart from 'chart.js';

const makePriceChart = (id, data) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const priceChart = new Chart(document.getElementById(id), {
    data: { labels, datasets: [{ data: values, label: 'price' }] },
    type: 'line'
  });
};

export default { makePriceChart };
