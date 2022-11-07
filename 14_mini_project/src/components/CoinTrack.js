import {useEffect, useState} from "react";

function CoinTrack() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  // 컴포넌트 마운트시 암호화폐 API 불러오기
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CoinTrack;
