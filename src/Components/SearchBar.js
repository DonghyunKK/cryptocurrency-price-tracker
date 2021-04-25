import React from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = ({ handleChange }) => {
  return (
    <div className="coin-search">
      <h1>Coin24</h1>
      <div className="search-container">
      <form className="search-form">
        <input type="text" placeholder="Search" className="search-input" onChange={handleChange} />
      </form>
      <AiOutlineSearch className="icon" />
      </div>
    </div>
  )
};

export default SearchBar;