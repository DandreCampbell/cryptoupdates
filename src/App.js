import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import CoinTest from './CoinTest';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const dataloop = setInterval(() => {
      axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data);
        })
        .catch(error => console.log(error));      
    }, 100);

    return () => clearInterval(dataloop);
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

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
      {filteredCoins.map(coin => {
        return (
          <CoinTest
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

export default App;
