# Verify your Smart Contract on Etherscan --takes 5 min.

## 1. Cloning

Clone **[this](https://github.com/shipends/verify-etherscan)** repo -- _maintained by your fellow shipper :)_

```bash
git clone https://github.com/shipends/verify-etherscan
```

## 2. Installing

Go _inside_ the folder + `install` packages.

```js
npm install
```

## 3. verifying

-   Go **[here](https://polygonscan.com/)** + Sign Up / Sign In.
-   After logging in, head over **[here](https://polygonscan.com/myapikey)** and create your _API_ key.
-   Copy that API Key + create `.env` file + paste it there.

```
ETHERSCAN_API_KEY = A6NY2IUQX43A2F3PK9AU46PWXN8V5X6FPS
```

-   Create an _Alchemy_ account from **[here](https://www.alchemy.com/)**.
-   Go to dashboard from **[here](https://dashboard.alchemy.com/)**, then click on `Create App`.
-   Go to dashboard **[again](https://dashboard.alchemy.com/)**, then click on `View Key` + copy the HTTPS url.
-   Paste that copied URL in `.env` too.

```
ALCHEMY_RPC_URL = https://polygon-mumbai.g.alchemy.com/v2/HXjU_LEQGsJdorj0WvERDM33FLGv5tnk
```

-   Drop your _smart contract_ in `contracts` folder
-   If your smart contract has any _constructor_ arguments, open `arguments.js` + put those
    over there.

```js
module.exports = ["Helu Shipper!", "Shipends"];
```

> **Note** -- Arguments _must_ be exactly **_same_** as when your contract was **_deployed_**.

-   If you have contructor arguments, run the command given below.

```bash
npx hardhat verify --constructor-args arguments.js 0xFB6dBBF6CA6445409D572D11Da2d38d8e97Ac7df --network mumbai
```

-   **OR** else run this one given below.

```bash
npx hardhat verify 0xFB6dBBF6CA6445409D572D11Da2d38d8e97Ac7df --network mumbai
```

> **p.s.,** don't forget to **_replace_** given smart contract address with yours :)

## 4. Confirming

Go to _Polygonscan Mumbai_ from **[here](https://mumbai.polygonscan.com/)** + paste your _deployed_ contract address in search bar --
you will see a green check mark on `Contract` tab + anyone can _connect_ their wallet & _interact_ with it --
_you don't need that ***hunky-funky*** frontend after all :)_

## 5. What's Next?
