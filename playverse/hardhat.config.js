require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {}, // Local development network
    sepolia: {
      url: "https://sepolia.testnetprovider.com", // Replace with the actual Sepolia provider URL
      accounts: ["YOUR_PRIVATE_KEY"],
    },
  },
};
