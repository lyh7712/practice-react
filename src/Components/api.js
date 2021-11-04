import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

export const getPrices = () => apiUrl.get('tickers');
export const getExchanges = () => apiUrl.get('exchanges');
export const getCoins = () => apiUrl.get('coins');
export const getCoinDetail = (id) => apiUrl.get(`coins/${id}`);
export const getCoinExchanges = (id) => apiUrl.get(`coins/${id}/exchanges`);
