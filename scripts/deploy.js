const { ethers } = require("hardhat");

async function main(){
    const UniFactory= await ethers.getContractFactory('UniswapV2Factory');
    const unifactory=await UniFactory.deploy('Metamask wallet address');
    await unifactory.deployed();


    console.log('UniFactory deployed to:-', unifactory.address);
}
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
//  0x6A8AE4569E7F3ac142e7Db9c43170b0aFE78A294
