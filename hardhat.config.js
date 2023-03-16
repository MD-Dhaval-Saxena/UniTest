require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
   defaultNetwork: "sepolia",
  networks: {
<<<<<<< HEAD
    sepolia: {
      url: process.env.INFURA_URL,
      accounts:[process.env.API_KEY]
=======
    goerli: {
      url: "infur url here",
      accounts:["Metamask private key"]
>>>>>>> 6e8b765dc51429b5965829a011084f8fdb40c430
    },
  },
};
