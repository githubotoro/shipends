import "../styles/globals.css";
import "../styles/github.css";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { PageView } from "../lib/ga";
import { useEffect, useState } from "react";

import { Navigation } from "../components";
import SessionContext from "../session/sessionContext";

const App = ({ Component, pageProps: { ...pageProps } }) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			PageView(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	const [session, setSession] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("shipper");
		token ? setSession(token) : setSession("");
	}, []);

	return (
		<>
			<div className={`font-RobotoFlex ${router.asPath === "/" ? "bg-isWhite" : "bg-isGrayLightEmphasis6"}`}>
				<SessionContext.Provider
					value={{
						state: {
							session: session,
						},
						setSession: setSession,
					}}
				>
					<Navigation />
					<Component {...pageProps} />
					<Analytics />
				</SessionContext.Provider>
			</div>
		</>
	);
};

export default App;
