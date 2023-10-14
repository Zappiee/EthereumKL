import { ethers, parseEther } from "ethers"
import { abi } from "./abi"
import { useState } from "react"

function App() {

  const [name, setName] = useState()
  const [symbol, setSymbol] = useState()
  const [balance, setBalance] = useState()
  const [balanceInPlayToken, setBalanceInPlayToken] = useState(0);

  // get latest block number
  const getBlock = async () => {

    const wallet = new ethers.BrowserProvider(window.ethereum)
    const block = await wallet.getBlockNumber()
    console.log(block)

    // get connected address
    const address = await wallet.getSigner()
    console.log(address.address)

    // connection to token webpage
    const token = new ethers.Contract("0xfa34F30CA729FFE9585986448BC3733694FdD9b9", abi, address)

    // fetch data and print token data
    const name = await token.name()
    console.log(name)
    setName(name)

    const symbol = await token.symbol()
    console.log(symbol)
    setSymbol(symbol)

    // read token balance in account
    const balance = await token.balanceOf(address.address)
    setBalance(balance)
    console.log(balance)

    // Convert balance to string and divide it by 1000000000000000000 to show Play Token
    const balanceString = balance.toString()
    setBalanceInPlayToken(balanceString / 1000000000000000000)
    console.log(balanceInPlayToken)
  }

  // function to add token
  const mintToken = async () => {

    const wallet = new ethers.BrowserProvider(window.ethereum)
    const block = await wallet.getBlockNumber()

    console.log(block)

    // get connected address
    const address = await wallet.getSigner()
    console.log(address.address)

    const token = new ethers.Contract("0xfa34F30CA729FFE9585986448BC3733694FdD9b9", abi, address)

    // function that adds token to wallet
    await token.mint(address.address,ethers.parseEther("100000"))

  }

  // run the function
  getBlock()

  return (
    <div>
      <p>Demostration of displaying token information by connecting to metamask</p>
      <p>New Wallet Name: {name}</p>
      <p>New Wallet Symbol: {symbol}</p>
      <p>balance of account: {balanceInPlayToken + symbol}</p>
      <button onClick={() => mintToken()}>Add tokens to account</button>
    </div>
  );
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


export default App;