import { Octokit } from "octokit";

const FetchIndex = async ({ path }) => {
	const owner = `shipends`;
	const repo = `ships`;

	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
	});

	const response = await octokit.request(
		"GET /repos/{owner}/{repo}/contents/{path}{?ref}",
		{
			owner: owner,
			repo: repo,
			path: path,
		}
	);

	const json = JSON.parse(Buffer.from(response.data.content, "base64"));

	return json;
};

export default FetchIndex;
