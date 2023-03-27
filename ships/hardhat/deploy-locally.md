# deploy smart contracts locally --takes 4 min.

## 1. creating deploy Script

create **deploy.js** file in `scripts` folder -- if it _already_ exists, `delete` all the content in it,
**_coz'_** we _gonna_ start from scratch -- like **_pros_**.

```js title="./scripts/deploy.js" showLineNumbers {4}
const hre = require("hardhat");

const main = async () => {
    // We'll write deployment logic here
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
```

## 2. (optional) nerdy deployment stuff

-   to **_deploy_** a smart contract, it's `bytecode` is required -- you can find it stored in `bytecode` variable @ **below** path.

```path title="Bytecode Path"
artifacts/contracts/[CONTRACT_NAME].sol/[CONTRACT_NAME].json
```

-   bytecode is taken by a function of _ethers_ called `getContractFactory`.
-   then, we will call the **_deploy_** method returned by getContractFactory object.
-   now, just _wait_ for the `deployed promise` to get fulfilled.

> **note:** bytecode consists of _anything + everything_ your smart contract does. It will be then converted to machine level _binary code_.

## 3. Writing Deployment Logic

-   setting **contract factory**

```js
const contractFactory = await hre.ethers.getContractFactory("CONTRACT_NAME");
```

-   calling **deploy** method

```js
const contract = await contractFactory.deploy();
```

-   **waiting** for deployment to complete

```js
await contract.deployed();
```

-   finally, your `main` function will look like **below**.

```js title="./scripts/deploy.js" showLineNumbers
const main = async () => {
    const contractFactory = await hre.ethers.getContractFactory("Hello");
    const contract = await contractFactory.deploy();
    await contract.deployed();

    console.log(`Deployment address is ${contract.address}`);
};
```

> **_p.s._**, you can also **console.log** _contractFactory + contract_ objects to see all that _nerdy_ stuff which happens behind the scenes.

## 5. executing deploy script

run **below** command in terminal -- it will _spin_ a local blockchain -> `execute` your deploy script ->
_terminate_ the local instance -- all in just **one** command, that's hardhat _bruh_ :)

```bash title="Terminal"
npx hardhat run scripts/deploy.js
```

## 6. what's next?

you have learnt how to build, now it's time to ship those smart contracts to actual testnet, wink wink.
click [here](./deploy_testnet.md) to deploy smart contracts + go live, fr.
