import React from 'react'
import './Register.css';

// {
//   name: "Binance Coin",
//   symbol: "BNB",
//   decimals: 18,
//   address: ethers.constants.AddressZero,
//   coingeckoUrl: "https://www.coingecko.com/en/coins/binance-coin",
//   imageUrl: "https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png",
//   isNative: true,
// },

const Register = () => {
  const [name, setName] = React.useState('');
  const [symbol, setSymbol] = React.useState('');
  const [decimals, setDecimals] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [coingeckoUrl, setCoingeckoUrl] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [isNative, setIsNative] = React.useState(false);


  function handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  return (
    <div className="register-assets">
      <form onSubmit={handleSubmit}>
        <input
          type="string"
          className="App-slippage-tolerance-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="string"
          className="App-slippage-tolerance-input"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />

        <input
          type="number"
          className="App-slippage-tolerance-input"
          min="0"
          value={decimals}
          onChange={(e) => setDecimals(e.target.value)}
        />

        <input
          type="string"
          className="App-slippage-tolerance-input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="string"
          className="App-slippage-tolerance-input"
          value={coingeckoUrl}
          onChange={(e) => setCoingeckoUrl(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Register