# How hardhat works under the hood? --takes 3 min.

## 1. Importing Environment

Create a new file -- **hello.js** in `scripts` folder. We'll require Hardhat's native environment in order to _interact_ with our smart contract --- therefore, let's `import` it.

```js title="./scripts/hello.js"
const hre = require("hardhat");
```

## 2. Writing main()

```js title="./scripts/hello.js" showLineNumbers {4}
const hre = require("hardhat");

const main = async () => {
	console.log("Hello World");
};

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
```

## 3. Executing main()

To **execute** the _script_ that we just made, just `run` the below command.

```bash title="Terminal"
npx hardhat run scripts/hello.js
```

-   `npx` - telling NodeJS that you wanna do something
-   `hardhat` - specifying the package that you want to use
-   `run` - stating that you wanna run something
-   `scripts/hello.js` - setting the path of the file that you wanna run

## 4. Something Cool Just Happened

-   You will notice **_two_** folders - _artifacts_ & _cache_ in your project directory now.
-   **_Coz'_** whenever you run a script in hardhat, _all_ the contracts stored in `contracts` folder get _compiled_ + _generate_ all the deployment info.
-   **_Wait a minute!_** -- we didn't **specify** any smart contracts to `compile`, then _why_ were folders generated, huh? -- **coz'** Hardhat doesn't care
    it simply `finds` + `compiles` all contracts **automagically** :)

> **_p.s._**, in order to **integrate** smart contract into your frontend -- you'll require only **.json** file stored @ **below** path.

```path title="JSON Path"
artifacts/contracts/[CONTRACT_NAME].sol/[CONTRACT_NAME].json
```

## 5. Cleaning (Optional)

When **you** are dealing with _many_ contracts + constantly **executing** some `scripts` -- they **_will_** run successfully on first execution;
but after that, they might just keep _emitting_ **_errors_** -- if it happens, just use `clean` command -- it **deletes** `artifacts` folder and
**removes** all the files from `cache` folder.

```bash title="Terminal"
npx hardhat clean
```

## 6. What's Next?

You know how everything works right from inside out. But, it **ain't** worth anything.
Click [here](./deploy_testnet.md) & let's get em' deployed -- **_within 3 min._**
