import React from 'react'
import './Register.css';
import { addRegistration } from '../../actions/addRegistration';
import { Combobox } from '@headlessui/react';

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
  const [decimals, setDecimals] = React.useState(0);
  const [address, setAddress] = React.useState('');
  const [coingeckoUrl, setCoingeckoUrl] = React.useState('');

  const chains = [34, 1499];
  const [selectedChain, setSelectedChain] = React.useState(chains[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addRegistration(name, symbol, decimals, address, coingeckoUrl);
  }

  // <Combobox.Input onChange={(event) => setQuery(event.target.value)} />

  return (
    <div className="register-assets">
      <span className='registration-header'>Register Asset</span>

      <form className='registration-info' onSubmit={handleSubmit}>

        <div className='entry-info'>
          <span className='entry-decorator'>Name: </span>
          <input
            type="string"
            className="entry-info-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>


        <div className='entry-info'>
          <span className='entry-decorator'>Symbol: </span>
          <input
            type="string"
            className="entry-info-input"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>

        <div className='entry-info'>
          <span className='entry-decorator'>Decimals: </span>
          <input
            type="number"
            className="entry-info-input"
            min="0"
            value={decimals}
            onChange={(e) => setDecimals(e.target.value)}
          />
        </div>

        <div className='entry-info'>
          <span className='entry-decorator'>Address: </span>
          <input
            type="string"
            className="entry-info-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className='entry-info'>
          <span className='entry-decorator'>CoinGeckoUrl: </span>
          <input
            type="string"
            className="entry-info-input"
            value={coingeckoUrl}
            onChange={(e) => setCoingeckoUrl(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register