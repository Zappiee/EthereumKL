const { ethers } = require("ethers");
const fs = require("fs");

async function deploy() {
    const provider = new ethers.providers.JsonRpcProvider("YOUR_INFURA_URL");
    const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

    const MyTokenFactory = new ethers.ContractFactory(
        JSON.parse(fs.readFileSync("./build/MyToken.abi").toString()),
        JSON.parse(fs.readFileSync("./build/MyToken.bin").toString()),
        wallet
    );

    const myToken = await MyTokenFactory.deploy();
    await myToken.deployed();

    console.log("MyToken deployed to:", myToken.address);
}

deploy();
