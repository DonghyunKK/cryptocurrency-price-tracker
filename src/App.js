import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CoinTable from './Components/CoinTable';
import SearchBar from './Components/SearchBar';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { Toggle } from './Components/Toggle';
import styled, { ThemeProvider } from 'styled-components';

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=GBP&order=market_cap_desc&per_page=100&page=1&sparkline=false"


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  console.log(theme)

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
    <ThemeProvider theme={themeMode}>
      <div className="container">
        <GlobalStyles />
          <SearchBar handleChange={ handleChange } />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <CoinTable filteredCoins={ filteredCoins } />
    </ThemeProvider>
  );
}

export default App;
