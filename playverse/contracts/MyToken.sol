// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "playverse/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PlayToken is ERC20 {
    constructor() ERC20("PlayToken", "Play") {
        _mint(msg.sender, 1000000000000000000000000); // Mint 1,000 tokens to the deployer
    }
}
