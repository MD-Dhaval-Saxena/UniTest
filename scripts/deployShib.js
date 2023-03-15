const { ethers } = require("hardhat");

async function main(){
    const [deployer] =await ethers.getSigners();
    const ShibCoin= await ethers.getContractFactory('Shib',deployer);
    const shibcoin=await ShibCoin.deploy();


    console.log('ShibCoin deployed to:-',shibcoin.address);
}
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
// 0xBcb69Fc62CF8de877f82F854dc5b63E8D6499099