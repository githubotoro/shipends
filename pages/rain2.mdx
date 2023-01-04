# Stylize Connect Wallet Button --takes ∞

> Prerequisite -- [Add Connect Wallet Button](./1-add-connect-wallet-button.md)

We'll import connect wallet button + modify + wrap it in a component which can be then imported anywhere in our web app. Technically, we will need to change styles of 2 buttons + 1 div.

-   Connect wallet button
-   Wrong network button
-   Div showing connected chain + address + balance

> Note: Below code is for the web app with Tailwind -- If you want to customize without tailwind, refer code from [here](https://www.rainbowkit.com/docs/custom-connect-button)

```js CustomizedWallet.js
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const CustomizedWallet = () => {
	return (
		<ConnectButton.Custom>
			{({
				account,
				chain,
				openAccountModal,
				openChainModal,
				openConnectModal,
				authenticationStatus,
				mounted,
			}) => {
				const ready = mounted && authenticationStatus !== "loading";
				const connected =
					ready &&
					account &&
					chain &&
					(!authenticationStatus ||
						authenticationStatus === "authenticated");
				return (
					<div
						{...(!ready && {
							"aria-hidden": true,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none",
							},
						})}
					>
						{(() => {
							if (!connected) {
								return (
									{/* === CONNECT WALLET BUTTON === */}
									<button
										onClick={openConnectModal}
										type="button"
									>
										Connect Wallet
									</button>
									{/* === CONNECT WALLET BUTTON === */}
								);
							}
							if (chain.unsupported) {
								return (
                                    {/* === WRONG NETWORK BUTTON === */}
									<button
										onClick={openChainModal}
										type="button"
									>
										Wrong network!
									</button>
									{/* === WRONG NETWORK BUTTON === */}
								);
							}
							return (
								<div style={{ display: "flex", gap: 12 }}>
                                    {/* === CHAIN ICON + NAME DISPLAY === */}
									<button
										onClick={openChainModal}
										style={{
											display: "flex",
											alignItems: "center",
										}}
										type="button"
									>
										{chain.hasIcon && (
											<div
												style={{
													background:
														chain.iconBackground,
													width: 12,
													height: 12,
													borderRadius: 999,
													overflow: "hidden",
													marginRight: 4,
												}}
											>
												{chain.iconUrl && (
													<img
														alt={
															chain.name ??
															"Chain Icon"
														}
														src={chain.iconUrl}
														style={{
															width: 12,
															height: 12,
														}}
													/>
												)}
											</div>
										)}
										{chain.name}
									</button>
                                    {/* === CHAIN ICON + NAME DISPLAY === */}

									{/* === ADDRESS + BALANCE DISPLAY === */}
									<button
										onClick={openAccountModal}
										type="button"
									>
										{account.displayName}
										{account.displayBalance
											? ` (${account.displayBalance})`
											: ""}
									</button>
									{/* === ADDRESS + BALANCE DISPLAY === */}
								</div>
							);
						})()}
					</div>
				);
			}}
		</ConnectButton.Custom>
	);
};
```
