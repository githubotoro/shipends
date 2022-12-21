import Head from "next/head";
import Image from "next/image";

import { Cta, Palette } from "../components/Home";

const Home = () => {
	return (
		<>
			<Head>
				<title>Shipends</title>
				<meta
					name="description"
					content="We help you ship Web3 products faster than the speed of light."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Cta />
			</main>
		</>
	);
};

export default Home;
