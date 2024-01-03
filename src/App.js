import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './components/Coin';

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
        <div className='text-white flex flex-col items-center mt-[65px] pb-[100px]'>
            <h1 className='text-[42px] text-center mb-[32px]'>Cryptocurrency Market</h1>
            <div className='flex flex-row justify-center items-center w-[100%] h-[75px]'>
                <div className='flex items-center pr-[24px] min-w-[250px]'>
                    <h2 className='text-[16px] w-[150px] pl-[150px] crypto-name'>Currency</h2>
                    <h2 className='text-[16px] pl-[150px]'>Symbol</h2>
                </div>
                <div className='text-right flex justify-between w-[300px]'>
                    <h2 className='flex justify-center w-[150px]'>Stock Price</h2>
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
