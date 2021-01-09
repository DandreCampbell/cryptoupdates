import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './components/coin/Coin';

export default function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const intervals = setInterval(() => {
      axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(currency => {setCoins(currency.data);})
        .catch(error => console.log(error));
    }, 1000);

    return () => clearInterval(intervals);
  }, []);

  return (
    <div className='coin-app'>
    <h1 className='coin-text'>Cryptocurrency Market</h1>
    <div className="title-row">
      <div className="crypto">
        <h1 className="crypto-name">Currency</h1>
        <h1 className="crypto-symbol">Symbol</h1>
      </div>
      <div className="crypto-data">
        <h1 className="crypto-price">Stock Price</h1>
      </div>
    </div>
      {coins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}
