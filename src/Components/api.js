import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1/',
});

export const coinsInfo = {
  tickers: () => apiUrl.get('tickers'),
  exchanges: () => apiUrl.get('exchanges'),
  coins: () => apiUrl.get('coins'),
};
