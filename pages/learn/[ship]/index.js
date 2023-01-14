import { Fetch } from "../../../components";

export const getStaticProps = async (context) => {
	const { params } = context;

	const owner = "shipends";
	const repo = `ships`;
	const path = `${params.ship}/index.md`;

	const response = await Fetch({ owner, repo, path });

	return {
		props: {
			ship: response.data,
		},
	};
};

export const getStaticPaths = async () => {
	const owner = "shipends";
	const repo = "ships";
	const path = "index.json";

	const response = await Fetch({ owner, repo, path });

	const ships = JSON.parse(
		Buffer.from(response.data.content, "base64")
	).ships;

	const paths = ships
		.filter((ship) => ship.status === "active")
		.map((ship) => {
			return {
				params: {
					ship: `${ship.path}`,
				},
			};
		});

	return {
		paths: paths,
		fallback: false,
	};
};

const Ship = ({ ship }) => {
	return (
		<>
			<h1>Ship</h1>
			<br />
			{ship.content}
		</>
	);
};

export default Ship;
