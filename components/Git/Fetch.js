import { Octokit } from "octokit";

const Fetch = async ({ path }) => {
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

	return response;
};

export default Fetch;
