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

// const ships = JSON.parse(
// 	Buffer.from(response.data.content, "base64")
// ).ships;

// const paths = ships
// 	.filter((ship) => ship.status === "active")
// 	.map((ship) => {
// 		return {
// 			params: {
// 				ship: `${ship.path}`,
// 			},
// 		};
// 	});

export default Test;
