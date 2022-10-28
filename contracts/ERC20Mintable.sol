// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC20Mintable is ERC20, Ownable  {
  constructor(string memory name, string memory token, uint initialmint) ERC20(name,token){
    _mint(msg.sender, initialmint * 1 ether);
  }

  function mint(address to, uint256 amount) public onlyOwner(){
    _mint(to,amount);
  }

}