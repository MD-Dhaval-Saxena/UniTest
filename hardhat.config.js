require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
   defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: process.env.INFURA_URL,
      accounts:[process.env.API_KEY]
    },
  },
};
