require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
   defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: "infur url here",
      accounts:["Metamask private key"]
    },
  },
};
