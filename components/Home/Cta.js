import Socials from "./Socials";
import Header from "./Header";
import Image from "next/image";

const Cta = () => {
	return (
		<>
			<div className="flex flex-col bg-isWhite bg-top">
				<div
					className="flex flex-col items-center w-full min-h-screen text-center place-content-center
			 			"
				>
					<Header />

					<div className="flex flex-row mt-4 space-x-6 md:mt-6">
						<Socials />
					</div>
				</div>
			</div>
		</>
	);
};

export default Cta;
