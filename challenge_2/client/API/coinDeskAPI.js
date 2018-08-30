import axios from 'axios';

const priceHistoryURL = 'https://api.coindesk.com/v1/bpi/historical/close.json';

const getPriceHistory = (startDate, endDate, callback) => {
  const requestURL = `${priceHistoryURL}?start=${startDate}&end=${endDate}`;
  axios.get(requestURL).then(results => callback(results));
};

export default { getPriceHistory };
