import NavigationPanel from "./NavigationPanel";
import SectionPanel from "./SectionPanel";
import Content from "./Content";

const Page = ({ frontmatter, source, index }) => {
	return (
		<>
			<div className="flex flex-col items-center w-full min-h-screen bg-isGrayLightEmphasis6 place-content-start">
				<div className="w-full h-full lg:max-w-[1200px] flex flex-col p-[12px] ">
					<SectionPanel index={index} />
					<Content frontmatter={frontmatter} source={source} />
				</div>
			</div>

			<NavigationPanel frontmatter={frontmatter} index={index} />
		</>
	);
};

export default Page;
