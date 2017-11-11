var Migrations = artifacts.require("./Migrations.sol");
var SetInStone = artifacts.require("contracts/SetInStone.sol");
var Challenge = artifacts.require("contracts/Challenge.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SetInStone);
  deployer.deploy(Challenge);
};
