import React from 'react';
import './CoinTable.css';

const CoinList = ({ filteredCoins }) => {
  return (
    <div className="coin-container">
      <main className="coin-center">
        <table className="coin-table">
          <colgroup span="3"></colgroup>
          <thead>
            <tr className="table-row">
              <th scope="colgroup" colSpan="3">name</th>
              {/* <th scope="col"></th> */}
              <th scope="col">price</th>
              <th scope="col">change</th>
              <th scope="col" className="small-screen">volume</th>
              <th scope="col" className="small-screen">market cap</th>
            </tr>
          </thead>
            {filteredCoins.map((coin) => {
            const {market_cap_rank, name, image, symbol, current_price, total_volume,  price_change_percentage_24h, market_cap } = coin;
              return (
                <tbody key={market_cap_rank}>
                  <tr className="table-row">
                    <td><img src={image} alt={name} className="coin-img"/></td>
                    <td className="coin-name">{name}</td>
                    <td>{symbol.toUpperCase()}</td>
                    <td>£{current_price}</td>
                    <td className={`${price_change_percentage_24h > 0 ? 'green' : 'red' }`}>{price_change_percentage_24h.toFixed(2)}%</td>
                    <td className="small-screen">{total_volume.toLocaleString()}</td>
                    <td className="small-screen">{market_cap.toLocaleString()}</td>
                  </tr>
                </tbody>
              )
            })}
        </table>
      </main>
    </div>
  )
};

export default CoinList;