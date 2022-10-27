// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Standar is ERC20  {
  constructor(string memory name, string memory token, uint initialmint) ERC20(name,token){
    _mint(msg.sender, initialmint * 1 ether);
  }
}