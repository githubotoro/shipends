# set up hardhat --takes 2 min.

## 1. installation

```bash
npm init -y
npm install --save-dev hardhat
```

## 2. project creation

run **below** command in terminal -> choose `create` a _javaScript_ project -> `SPAM ENTER` for all other options.

```bash title="Terminal"
npx hardhat
```

> **note:** whenever you _compile/run_ your smart contract, hardhat automatically gets the required **version** downloaded + installed for you -- _pretty cool right!_

## 3. quick folder intro

-   `node_modules` - all the magical spells of Hardhat reside here
-   `contracts` - smart contracts are written here
-   `scripts` - deployment scripts are made here
-   `test` - testing scripts go here

## 4. starter contract

create a file -- **Hello.sol** in `contracts` folder -- then, _copy + paste_ the following code.

```js title="./contracts/Hello.sol" showLineNumbers {8}
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Hello {
    string public message = "Hello World";

    function getMessage() public view returns (string memory) {
        return message;
    }
}
```

## 5. (optional) pro tips

-   install `Solidity` extension in VS code by _Juan Blanco_ from [here](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) -- it will help in debugging + developing _faster_.
-   don't know how to `write` smart contracts? -- check [this](https://solidity-by-example.org/) out.

## 6. what's next?

you have a hardhat project all set up, **damn!** -- before doing some _magical stuff_ with it, you actaully need to know
how it all **works**, right? -- click [here](./under-the-hood.md) to expose Hardhat's magical tricks happening under the hood.
