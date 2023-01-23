import ShipCta from "./ShipCta";
import ShipCard from "./ShipCard";

const ShipIndex = ({ ships }) => {
	return (
		<>
			<div className="flex min-h-screen text-xs font-normal place-content-center bg-isGrayLightEmphasis6 md:text-sm ">
				<div className="-mt-[12px] mx-auto max-w-7xl flex-1 p-[12px]">
					<ShipCta />

					<div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 md:grid-cols-3">
						{ships.map((ship, index) => {
							return <ShipCard key={index} ship={ship} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default ShipIndex;
