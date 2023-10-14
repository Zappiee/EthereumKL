import { ethers, parseEther } from "ethers"
import { abi } from "./abi"
import { useState } from "react"

// create a function
// make sure u need to connect to the main network from ethereum mainet to sepholia in the metamask extnsion
function App() {

  // to display the ethereum currency in the page instead of console log
  // basically u set the new currency name into the variable name and symbol
  // so when u want to use in the main code just use {name} and {symbol}
  const[name, setName] = useState()
  const[symbol, setSymbol] = useState()
  const[balance, setBalance] = useState()

    // get latest block number
    const getBlock = async () => {

      // refering to any web3 wlalets (using metamask)/create a new connection to metamask
      const wallet = new ethers.BrowserProvider(window.ethereum)
      const block = await wallet.getBlockNumber()

      console.log(block)

      // get connected address
      const address = await wallet.getSigner()
      console.log(address.address)


    // create contract reference to know what function u can use in the contract

    // steps to do that first

    // in contract>code, convert the abi down there in json formatter
    // since the abi length long af u need to create a new create new thing in src folder to store huge abi information
    // do export const abi = {converted json format}
  
    // this is to connect to the token web page (token id of nasi lemak, the abi contract information, address of your metamask)
    const token = new ethers.Contract("0xc170bd5653B0d499eE2cAa700E4338B7549424eD", abi, address)

    // fetch data and print data
    // so inside read contract u can call any function that was listed there
    const name = await token.name()
    console.log(name)
    
    // set the name of the crypto into the setname function
    setName(name)


    // call the function called symbol from the read contract part in the website website
    const symbol = await token.symbol()
    console.log(symbol)

      // set the name of the crypto into the setname function
      setSymbol(symbol)

      // now we read balance of own address 
      const balance = await token.balanceOf(address.address)
      setBalance(balance)
      console.log(balance)

    }

    // now we create a new function to start to write contact then we can create tokes using the mint function (basically add token to account)
    const mintToken = async () => {

      // refering to any web3 wlalets (using metamask)/create a new connection to metamask
      const wallet = new ethers.BrowserProvider(window.ethereum)
      const block = await wallet.getBlockNumber()

      console.log(block)

      // get connected address
      const address = await wallet.getSigner()
      console.log(address.address)

      // this is to connect to the token web page (token id of nasi lemak, the abi contract information, address of your metamask)
      const token = new ethers.Contract("0xc170bd5653B0d499eE2cAa700E4338B7549424eD", abi, address)


      // new part of the code
      // require address and how mant tokens u want to add to account
      await token.mint(address.address,ethers.parseEther("100000"))

    }

  // run the function
  getBlock()

  // main code
  // to gain token just do /fund sepholia to chatbot in this link
  // https://chat.blockscan.com/index?a=0x035219a183f9e31514e0d7c23a85e3e76d7bf167
  return (
    <div>
        <p>Demostration of displaying token information by connecting to metamask</p>
        <p>New Wallet Name: {name}</p>
        <p>New Wallet Symbol: {symbol}</p>
        <p>Remaining balance of account: {balance + symbol}</p>
        

        <button onClick={() => mintToken()}>Add tokens to account</button>
    </div>
  );
  }

export default App;
