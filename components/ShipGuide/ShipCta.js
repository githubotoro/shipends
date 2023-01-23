const ShipCta = () => {
	return (
		<>
			<div
				className="mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[50px] mb-[20px] w-full text-isGrayDarkEmphasis6
					bg-clip-text text-center text-xl font-black md:text-2xl lg:text-3xl leading-tighter"
			>
				choose your&nbsp;
				<span
					className="rounded-md md:rounded-lg lg:rounded-xl shadow-md
						bg-gradient-to-br from-isBlueLight to-isBlueDark
						py-[0px] px-[6px] font-extrabold text-isGrayLightEmphasis6 md:py-[1px] md:px-[8px] lg:py-[2px] lg:px-[10px]"
				>
					next
				</span>
				&nbsp;
				<span className="font-black text-isGrayDarkEmphasis6">superpower!</span>
			</div>
		</>
	);
};

export default ShipCta;
