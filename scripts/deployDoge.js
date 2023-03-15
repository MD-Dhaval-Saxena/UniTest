const { ethers } = require("hardhat");

async function main(){
    const DogeCoin= await ethers.getContractFactory('UniswapV2Factory');
    const dogecoin=await DogeCoin.deploy('0xE75DF387a3F47f1760d0Dd423b27d2eEFD59c6b9');
    await dogecoin.deployed();


    console.log('DogeCoin deployed to:-', dogecoin.address);
}
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});
//  0x0cE91e633beCa6e825c33243FaD9baC45F278407