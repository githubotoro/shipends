import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<div className="font-Roboto">
				<Component {...pageProps} />
				<Analytics />
			</div>
		</>
	);
};

export default App;
