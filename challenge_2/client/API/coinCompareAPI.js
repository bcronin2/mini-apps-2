import axios from 'axios';
import 'datejs';

const priceHistoryURL =
  'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD';
const convertMillisToDays = millis =>
  Math.floor(millis / (1000 * 60 * 60 * 24));
const processResults = results => {
  const priceList = results.Data.map(result => {
    const date = new Date(result.time * 1000).toString('MM-dd-yyyy');
    const value = result.close;
    return { date, value };
  });
  return priceList;
};

const getPriceHistory = (startDate, endDate, callback) => {
  const startTime = new Date(startDate).getTime();
  const endTime = new Date(endDate).getTime();
  const toTs = endTime;
  const limit = convertMillisToDays(endTime - startTime);
  const requestURL = `${priceHistoryURL}&toTs=${toTs}&limit=${limit}`;
  axios.get(requestURL).then(results => callback(processResults(results.data)));
};

export default { getPriceHistory };
