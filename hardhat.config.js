require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
   defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/138c213db28a4fa1845efe932a110e02",
      accounts:["a1bcb37d90f2491cbe2509555fedbdabbc3b0cf129a726b2683c9e8265d6546e"]
    },
  },
};
