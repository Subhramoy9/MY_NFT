
  const hre = require("hardhat");
// const { ethers } = require('ethers');
async function main() {
  const NFT = await ethers.getContractFactory("NFT");

  const nft = await NFT.deploy();
   console.log(await nft.getAddress());
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0x6262eB1285873Cc123Cb2CA4927aac88F24662aC