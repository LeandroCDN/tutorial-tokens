// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const tname = "Patito";
  const token = "PTO";
  const amount = "1000000000000000000000000000";



  const ERCstandar = await hre.ethers.getContractFactory("ERC20Standar");
  const erc20standar = await ERCstandar.deploy(tname,token,amount);
  await erc20standar.deployed();

  console.log(  
    `ERC20standar deployed to ${erc20standar.address}`
  );
  
  const wait_confirmations = 3;
  await erc20standar.deployTransaction.wait(wait_confirmations);

  console.log(
    'Verifying contract on Etherscan...'
  );

  await erc20standar.deployTransaction.wait(wait_confirmations);


  await run(`verify:verify`, {
    address: erc20standar.address,
    constructorArguments:[tname,token,amount],
    contract: "contracts/ERC20Standar.sol:ERC20Standar",
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
