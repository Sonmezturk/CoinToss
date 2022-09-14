import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const MUMBAIRPC = "https://rpc-mumbai.maticvigil.com";
const MUMBAI_PRIVATE_KEYS = ["ea1755231a715a7734b333633306da7ed82ab57d122aa332f8821064cc0d9a5b"];

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    mumbai: {
      url: MUMBAIRPC,
      accounts: MUMBAI_PRIVATE_KEYS
    }
  }
};

export default config;
