import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CoinTable from './Components/CoinTable';
import SearchBar from './Components/SearchBar';

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=100&page=1&sparkline=false"


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setCoins(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <div className="container">
      <SearchBar handleChange={ handleChange } />
      <CoinTable filteredCoins={ filteredCoins } />
    </div>
  );
}

export default App;
