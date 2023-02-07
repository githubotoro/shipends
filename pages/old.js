import { useState } from "react";

const OldProfile = () => {
	const status = {
		signIn: {
			id: "signIn",
			display: "Sign in",
			alterDisplay: "Don't have an account?",
			alterButton: "Create one.",
			alterId: "createAccount",
			emailDisplay: "Email",
			passwordDisplay: "Password",
		},
		createAccount: {
			id: "createAccount",
			display: "Create New Account",
			alterDisplay: "Have an account already?",
			alterButton: "Sign in.",
			alterId: "signIn",
			emailDisplay: "Email",
			passwordDisplay: "Set Password",
		},
		resetPassword: {
			id: "resetPassword",
			display: "Reset Password",
			alterDisplay: "Don't have an account?",
			alterButton: "Create one.",
			alterId: "createAccount",
			emailDisplay: "Email",
			passwordDisplay: "New Password",
		},
	};

	const [currStatus, setCurrStatus] = useState(status["signIn"]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	return (
		<>
			<div className="flex flex-col min-h-screen bg-isGrayLightEmphasis6 p-[12px] place-content-start w-full items-center">
				<div className="flex flex-col items-center w-full ">
					<div
						className="flex flex-col w-full max-w-2xl rounded-t-lg bg-isBlueDark md:rounded-t-xl lg:rounded-t-2xl
                    py-[4px] px-[12px] text-isWhite"
					>
						<div className="flex flex-col items-center w-full text-lg font-black md:text-xl lg:text-2xl text-is">
							Create New Account
						</div>
					</div>
					<div className="flex flex-col items-center w-full max-w-2xl bg-isWhite">
						<form
							className="flex flex-col w-full max-w-2xl bg-isWhite 
                    py-[12px] px-[12px] "
						>
							<div className="flex flex-row items-center w-full pb-[4px] px-[6px] md:px-[10px] lg:px-[12px] md:pb-[12px] lg:pb-[10px]">
								<div className="flex flex-row items-center ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										className="w-6 h-6 md:w-7 md:h-7 lg:h-8 lg:w-8 fill-isGrayLight"
									>
										<path
											fill-rule="evenodd"
											d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>

								<input
									type="text"
									placeholder="username"
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
									className="ml-[12px] w-full rounded-md appearance-none focus:outline-none bg-isGrayLightEmphasis6 md:rounded-lg lg:rounded-xl
                                py-[4px] px-[6px] md:px-[10px] lg:px-[12px] md:py-[8px] lg:py-[10px] font-medium text-isGrayLight tracking-wide
                                text-xs md:text-sm lg:text-md "
								/>
							</div>

							<div className="flex flex-row items-center w-full pb-[4px] px-[6px] md:px-[10px] lg:px-[12px] md:pb-[12px] lg:pb-[10px]">
								<div className="flex flex-row items-center ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										className="w-6 h-6 md:w-7 md:h-7 lg:h-8 lg:w-8 fill-isGrayLight"
									>
										<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
										<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
									</svg>
								</div>

								<input
									type="email"
									placeholder="you@email.com"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									className="ml-[12px] w-full rounded-md appearance-none focus:outline-none bg-isGrayLightEmphasis6 md:rounded-lg lg:rounded-xl
                                py-[4px] px-[6px] md:px-[10px] lg:px-[12px] md:py-[8px] lg:py-[10px] font-medium text-isGrayLight tracking-wide
                                text-xs md:text-sm lg:text-md "
								/>
							</div>

							<div className="flex flex-row items-center w-full pb-[4px] px-[6px] md:px-[10px] lg:px-[12px] md:pb-[12px] lg:pb-[10px]">
								<div className="flex flex-row items-center ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										className="w-6 h-6 md:w-7 md:h-7 lg:h-8 lg:w-8 fill-isGrayLight"
									>
										<path
											fill-rule="evenodd"
											d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>

								<input
									type="password"
									placeholder="password"
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									className="ml-[12px] w-full rounded-md appearance-none focus:outline-none bg-isGrayLightEmphasis6 md:rounded-lg lg:rounded-xl
                                py-[4px] px-[6px] md:px-[10px] lg:px-[12px] md:py-[8px] lg:py-[10px] font-medium text-isGrayLight
                                text-xs md:text-sm lg:text-md tracking-wide"
								/>
							</div>

							<div className="flex flex-col w-full  px-[6px] md:px-[10px] lg:px-[12px]  items-end">
								<button
									onClick={(e) => {
										e.preventDefault();
									}}
									className="rounded-md appearance-none focus:outline-none  md:rounded-lg lg:rounded-xl
                                 font-black text-md md:text-lg lg:text-xl px-[12px] py-[4px]
                                bg-isGreenDark text-isWhite hover:text-isGrayLightEmphasis6 hover:bg-isGreenDarkEmphasis
							    delay-50 transition duration-300 ease-in-out"
								>
									Sign Up
								</button>
							</div>
						</form>
					</div>
					<div
						className="flex flex-col w-full max-w-2xl rounded-b-lg bg-isGrayLightEmphasis3 md:rounded-b-xl lg:rounded-b-2xl
                    py-[4px] px-[12px] text-isGrayDarkEmphasis3"
					>
						<div className="flex flex-row items-center content-center w-full text-xs font-black place-content-center md:text-sm lg:text-md">
							Have an account already?&nbsp;{" "}
							<button
								onClick={(e) => {
									e.preventDefault();
									setCurrStatus(status[currStatus.alterId]);
								}}
								className="px-[6px] rounded-md  text-isBlueDark bg-isGrayLightEmphasis5
                                hover:text-isBlueDarkEmphasis hover:bg-isGrayLightEmphasis6
                                delay-50 transition duration-300 ease-in-out"
							>
								Sign In
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OldProfile;
