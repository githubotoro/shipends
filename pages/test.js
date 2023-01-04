const Test = () => {
	const fetchData = async () => {
		const octokit = new Octokit({
			auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
		});

		const data = await octokit.request(
			"GET /repos/{owner}/{repo}/contents/{path}{?ref}",
			{
				owner: "shipends",
				repo: "ships",
				path: "map.json",
			}
		);

		console.log(data);
	};

	return (
		<>
			<h1>Test</h1>
			<hr />
			<button
				onClick={() => {
					fetchData();
				}}
			>
				Fetch
			</button>
		</>
	);
};

export default Test;
