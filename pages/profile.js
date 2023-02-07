import * as jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { useContext } from "react";
import SessionContext from "../session/sessionContext";

const Profile = () => {
	// const status = {
	// 	createAccount: {},
	// 	resetPassword: {},
	// 	user: {},
	// };

	const sessionContext = useContext(SessionContext);
	const { session, setSession } = sessionContext.state;

	const [username, setUsername] = useState("shipper");
	const [email, setEmail] = useState("shipends@gmail.com");
	const [password, setPassword] = useState("uday");

	// const [currStatus, setCurrStatus] = useState(status["createAccount"]);

	const signUp = async () => {
		const res = await fetch("/api/auth/signUp", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
		});

		const data = await res.json();

		alert(data.message);
	};

	const logIn = async () => {
		const res = await fetch("/api/auth/logIn", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		const data = await res.json();

		if (data.token) {
			sessionContext.setSession(data.token);
			localStorage.setItem("shipper", data.token);
		}

		alert(data.message);
	};

	const logOut = async () => {
		localStorage.removeItem("shipper");
		sessionContext.setSession("");

		alert("User logged out.");
	};

	const updateEmail = async () => {
		if (sessionContext.state.session === "") {
			alert("User not logged in.");
		}

		const res = await fetch("/api/auth/updateEmail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				token: sessionContext.state,
			}),
		});

		const data = await res.json();

		alert(data.message);
	};

	const updateUsername = async () => {
		if (sessionContext.state.session === "") {
			alert("User not logged in.");
		}

		const res = await fetch("/api/auth/updateUsername", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				token: sessionContext.state,
			}),
		});

		const data = await res.json();

		alert(data.message);
	};

	const updatePassword = async () => {
		if (sessionContext.state.session === "") {
			alert("User not logged in.");
		}

		const res = await fetch("/api/auth/updatePassword", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				password: password,
				token: sessionContext.state,
			}),
		});

		const data = await res.json();

		alert(data.message);
	};

	return (
		<>
			<h1>Profile</h1>

			<hr />

			<button
				onClick={(e) => {
					e.preventDefault();
					signUp();
				}}
			>
				Sign Up
			</button>

			<hr />

			<button
				onClick={(e) => {
					e.preventDefault();
					logIn();
				}}
			>
				Log In
			</button>

			<hr />

			<button
				onClick={(e) => {
					e.preventDefault();
					logOut();
				}}
			>
				Log Out
			</button>

			<hr />

			<button
				onClick={(e) => {
					e.preventDefault();
					updateEmail();
				}}
			>
				Update Email
			</button>

			<hr />

			<button
				onClick={(e) => {
					e.preventDefault();
					updateUsername();
				}}
			>
				Update Username
			</button>

			<hr />

			<button
				onClick={(e) => {
					e.preventDefault();
					updatePassword();
				}}
			>
				Update Password
			</button>
		</>
	);
};

export default Profile;
