import Socials from "./Socials";
import Header from "./Header";

const Cta = () => {
	return (
		<>
			<div
				className="flex flex-col items-center text-center min-h-screen w-full place-content-center
                           bg-gradient-to-br from-black to-zeus"
			>
				<Header />

				<div className="mt-4 md:mt-6 flex flex-row space-x-6">
					<Socials />
				</div>
			</div>
		</>
	);
};

export default Cta;
