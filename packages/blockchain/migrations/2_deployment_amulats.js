// eslint-disable-next-line import/no-extraneous-dependencies,node/no-unpublished-require
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const Amulets = artifacts.require("Amulets");

module.exports = async function (deployer) {
  const instance = await deployProxy(Amulets, [], { deployer });
  console.log("Amulets deployed at: ", instance.address);
};
