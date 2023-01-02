const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favorite number of 0", async function () {
    const currentNumber = await simpleStorage.retrieve();
    const expectedNumber = "0";
    assert.equal(currentNumber.toString(), expectedNumber);
  });
  it("Should update when we call store", async function () {
    const expectedNumber = "7";
    const transactionResponse = await simpleStorage.store(expectedNumber);
    await transactionResponse.wait(1);

    const currentNumber = await simpleStorage.retrieve();
    assert.equal(currentNumber.toString(), expectedNumber);
  });

  it("Should work correctly with the people struct and array", async function () {
    const expectedName = "WZ";
    const expectedNumber = "18";
    const transactionResponse = await simpleStorage.addPerson(
      expectedName,
      expectedNumber
    );
    await transactionResponse.wait(1);
    const { number, name } = await simpleStorage.people(0);

    assert.equal(name, expectedName);
    assert.equal(number, expectedNumber);
  });
});
