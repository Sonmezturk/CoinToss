import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("User Address: ", deployer.address);
  console.log("User Balance:", (await deployer.getBalance()).toString());
  
  const totalAmountOfContract = ethers.utils.parseEther("0.5");
  const CoinToss = await ethers.getContractFactory("CoinToss");
  const coinTossContract = await CoinToss.deploy({ value: totalAmountOfContract });
  await coinTossContract.deployed();

  console.log("Deployed address:", coinTossContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });