import React from 'react';

const CoinList = ({ filteredCoins }) => {
  return (
    <div className="coin-container">
      <main>
        <table>
          <thead>
            <tr>
              <th scope="col">rank</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">change</th>
              <th scope="col">volume</th>
              <th scope="col">market cap</th>
            </tr>
          </thead>
            {filteredCoins.map((coin) => {
            const {id, name, image, symbol, current_price, total_volume, market_cap_rank, price_change_percentage_24h, market_cap } = coin;
              return (
                <tbody key={id}>
                  <tr>
                    <td>{market_cap_rank}</td>
                    <td><img src={image} alt={name} />{name}{symbol}</td>
                    <td>{current_price}</td>
                    <td>{price_change_percentage_24h}</td>
                    <td>{total_volume}</td>
                    <td>{market_cap}</td>
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