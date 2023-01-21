import Head from "next/head";
import Image from "next/image";

import { Cta } from "../components";

const Home = () => {
	return (
		<>
			<Head>
				<title>Shipends</title>
				<meta
					name="description"
					content="Ship cool products, without reading docs."
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
