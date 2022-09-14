import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("CoinToss", function () {
  async function deployCoinTossFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const CoinToss = await ethers.getContractFactory("CoinToss");
    const coinTossContract = await CoinToss.deploy({ value: '1' });

    return { coinTossContract, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should return error when user send more money than contract amount", async function () {
      const { coinTossContract, owner } = await loadFixture(deployCoinTossFixture);

      expect(await coinTossContract.flip({ value: '1' })).to.be.reverted
    });
  });

});
