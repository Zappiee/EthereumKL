const { ethers } = require("ethers");
const fs = require("fs");

async function deploy() {
    const sepoliaUrl = "https://sepolia.testnetprovider.com"; // Replace with the actual Sepolia provider URL
    const provider = new ethers.providers.JsonRpcProvider(sepoliaUrl);

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
