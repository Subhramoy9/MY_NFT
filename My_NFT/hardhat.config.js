require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/9YrA0Y0LRtVnhohnfOAJhbqrZmG2ZGQW',
      accounts: ['0xc84345ec29efc276ef7ecb0d334895f5d0944d390925e40d73ee5d5085b21853'],
    },
  },
};
