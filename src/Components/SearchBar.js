import React from 'react';

const SearchBar = ({ handleChange }) => {
  return (
    <div className="coin-search"> 
      <h1 className="coin-text">Search a currency</h1>
      <form>
        <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
      </form>
    </div>
  )
};

export default SearchBar;