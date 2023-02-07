import { useRouter } from "next/router";
import { Octokit } from "octokit";
import { Page, Constants, Render } from "../../../components";

export const getStaticProps = async (context) => {
	const octokit = new Octokit({
		auth: process.env.NEXT_PUBLIC_GIT_TOKEN,
	});

	const { params } = context;

	const owner = Constants.owner;
	const repo = Constants.repo;
	const pathMarkdown = `${params.ship}/${params.sail}.md`;

	let responseMarkdown;

	try {
		responseMarkdown = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}{?ref}", {
			owner: owner,
			repo: repo,
			path: pathMarkdown,
		});
	} catch (err) {
		return {
			notFound: true,
		};
	}

	const { frontmatter, source } = await Render({ responseMarkdown });

	const pathIndex = `${params.ship}/index.json`;
	const responseIndex = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}{?ref}", {
		owner: owner,
		repo: repo,
		path: pathIndex,
	});

	const index = JSON.parse(Buffer.from(responseIndex.data.content, "base64"));

	return {
		props: {
			frontmatter: frontmatter,
			source: source,
			index: index,
		},
		revalidate: 86400,
	};
};

export const getStaticPaths = async () => {
	const paths = [
		{
			params: {
				ship: "hardhat",
				sail: "prologue",
			},
		},
	];

	return {
		paths: paths,
		fallback: true,
	};
};

const Sail = ({ frontmatter, source, index }) => {
	const Router = useRouter();

	if (Router.isFallback) {
		return <>Loading...</>;
	}

	return (
		<>
			<Page frontmatter={frontmatter} source={source} index={index} />
		</>
	);
};

export default Sail;
