import "../styles/globals.css";
import "../styles/github.css";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { PageView } from "../lib/ga";
import { useEffect } from "react";

import { Navigation } from "../components";

const App = ({ Component, pageProps }) => {
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

	return (
		<>
			<div className={`font-RobotoFlex ${router.asPath === "/" ? "bg-isWhite" : "bg-isGrayLightEmphasis6"}`}>
				<Navigation />
				<Component {...pageProps} />
				<Analytics />
			</div>
		</>
	);
};

export default App;
