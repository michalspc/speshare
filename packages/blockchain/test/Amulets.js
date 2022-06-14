const truffleAssert = require("truffle-assertions");
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const Amulets = artifacts.require("Amulets");

const { BN } = web3.utils;

contract("Amulets", (accounts) => {
  describe("Mint Amulets", () => {
    let amuletsInstance;

    beforeEach(async () => {
      amuletsInstance = await deployProxy(Amulets, []);
    });

    it("User not on whitelist", async () => {});
    it("User not on whitelist", async () => {});
  });
});
