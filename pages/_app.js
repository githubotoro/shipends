import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<div className="font-Roboto">
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default App;
