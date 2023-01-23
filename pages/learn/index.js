import { Octokit } from "octokit";
import { Constants, ShipIndex } from "../../components";

export const getStaticProps = async () => {
	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
	});

	const owner = Constants.owner;
	const repo = Constants.repo;
	const path = "index.json";

	const response = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}{?ref}", {
		owner: owner,
		repo: repo,
		path: path,
	});

	const json = JSON.parse(Buffer.from(response.data.content, "base64"));
	const ships = json.ships;

	return {
		props: {
			ships: ships,
		},
	};
};

const Learn = ({ ships }) => {
	return (
		<>
			<ShipIndex ships={ships} />
		</>
	);
};

export default Learn;
