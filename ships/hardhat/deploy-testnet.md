# deploy your smart contract on testnet --takes 5 min.

## 1. cloning

clone **[this](https://github.com/shipends/deploy-testnet)** repo + _install_ -- _maintained by your fellow shipper :)_

```bash title="Terminal"
git clone https://github.com/shipends/deploy-testnet .
npm install
```

## 3. deploying

-   _Create_ an Alchemy account from [here](https://www.alchemy.com/)
-   Go to dashboard from [here](https://dashboard.alchemy.com/), then click on `Create App`
-   Go to dashboard [again](https://dashboard.alchemy.com/), then click on `View Key` + copy the `HTTPS url`
-   Create `.env` file + paste the _copied_ URL there

```env title=".env"
ALCHEMY_RPC_URL = https://polygon-mumbai.g.alchemy.com/v2/HXjU_LEQGsJdorj0WvERDM33FLGv5tnk
```

-   Now, copy your _Metamask_ private key _(don't know where it is? --
    refer from **[here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key#:~:text=On%20the%20account%20page%2C%20click,click%20%E2%80%9CConfirm%E2%80%9D%20to%20proceed.))**_ + paste
    it in `.env` as well

```env title=".env"
PRIVATE_KEY = 0754508311e37c1c3e98aff90cae665ac797666a8e983059cb05022257aa9f33
```

-   drop your _smart contract_ in `contracts` folder
-   open the file `deploy.js` under `scripts` folder
-   replace **Hello** with your smart contract name + if you got _constructor_ arguments, replace them too or else
    just leave em' blank

```js title="./scripts/deploy.js" showLineNumbers {2-3}
...
const contractFactory = await hre.ethers.getContractFactory("Hello");
const contract = await contractFactory.deploy("Helu Shipper", "Shipends");
...
```

-   _Finally,_ run the below command in terminal

```bash title="Terminal"
npx hardhat run scripts/deploy.js --network mumbai
```

## 4. confirming

Go to _Polygonscan Mumbai_ from **[here](https://mumbai.polygonscan.com/)** + paste your _deployed_ contract address in search bar --
**voila**, your smart contract is `live` for anyone to use, _isn't that cool!_

## 5. what's next?

think like this, _why_ would i connect my wallet to a random website which only god knows
what the heck it does ??? -- **99%** will just `bounce`, no matter how _good_ your idea is.

**But,** what if you drop a link to your _verified smart contract_ on
Etherscan where anyone can go + check out your actual code -- **_suddenly, you are legit._**
Click [here](./verify_etherscan.md) & get your smart contract verified -- within 5 min.

> **p.s.,** after verifying, you'll get a **_green check_** on Etherscan -- _all for free :)_
