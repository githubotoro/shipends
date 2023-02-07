import { useRouter } from "next/router";
import Link from "next/link";
import { Constants } from "../Git/Constants";

const SectionPanel = ({ index }) => {
	const Router = useRouter();

	return (
		<>
			<div className="flex flex-col w-full mb-[12px] place-content-center items-center">
				<div
					className="flex flex-row bg-isGreySubtle border-[1px] border-isGrayLightEmphasis4 bg-isWhite
					            items-center rounded-lg md:rounded-xl lg:rounded-2xl py-[6px] px-[6px] w-full max-w-[1208px] justify-between"
				>
					<div className="flex flex-row items-center group bg-isGreenDark hover:bg-isGreenDarkEmphasis delay-50 duration-300 ease-in-out py-[3px] md:py-[4px] lg:py-[5px] px-[7px] md:px-[8px] lg:px-[9px] rounded-md md:rounded-lg lg:rounded-xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="mr-[6px] w-5 h-5 md:h-6 md:w-6 lg:h-7 lg:w-7 fill-isWhite stroke-none delay-50 duration-300 ease-in-out"
						>
							<path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
						</svg>

						<div className="text-sm font-bold transition duration-300 ease-in-out delay-50 md:text-md lg:text-lg text-isWhite">
							{Math.floor(Math.random() * 100 + 100)}+ shippers
						</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 461.941 461.941"
							className="ml-[6px] w-5 h-5 md:h-6 md:w-6 lg:h-7 lg:w-7 fill-isWhite stroke-none delay-50 duration-300 ease-in-out"
						>
							<path
								d="M226.496,190.563c2.862-0.638,5.832-0.639,8.695-0.001l113.612,25.286l-10.658-67.5c-1.112-7.041-7.171-12.233-14.3-12.252
		l-31.675-0.085l-5.185-64.064c-0.609-7.523-6.882-13.325-14.43-13.345l-21.56-0.058l0.1-37.157
		c0.03-11.045-8.9-20.024-19.946-20.054c-0.019,0-0.036,0-0.055,0c-11.02,0-19.969,8.919-19.999,19.946l-0.1,37.157l-20.988-0.056
		c-7.548-0.021-13.852,5.747-14.501,13.268l-5.529,64.036l-31.26-0.084c-7.128-0.019-13.216,5.14-14.365,12.175l-11.116,68.028
		L226.496,190.563z"
							/>
							<path
								d="M110.416,375.186c17.402-12.674,38.307-19.514,60.277-19.514c21.969,0,42.875,6.841,60.277,19.514
		c17.402-12.674,38.307-19.514,60.277-19.514c21.969,0,42.872,6.84,60.275,19.512c7.392-5.388,15.418-9.711,23.883-12.916
		l27.664-76.601c1.417-3.924,1.077-8.268-0.932-11.924c-2.01-3.656-5.495-6.27-9.567-7.177l-161.721-35.994L69.365,266.558
		c-4.071,0.907-7.556,3.522-9.565,7.178c-2.009,3.656-2.348,7.999-0.931,11.922l27.675,76.632
		C95.007,365.49,103.029,369.806,110.416,375.186z"
							/>
							<path
								d="M456.083,413.984c-11.828-11.828-27.554-18.342-44.281-18.342s-32.453,6.514-44.281,18.342
		c-4.273,4.273-9.954,6.626-15.997,6.626c-6.043,0-11.724-2.353-15.996-6.626c-12.209-12.208-28.246-18.312-44.282-18.312
		c-16.036,0-32.072,6.104-44.28,18.312c-4.273,4.273-9.954,6.626-15.997,6.626c-6.043,0-11.724-2.353-15.996-6.626
		c-12.209-12.208-28.246-18.312-44.282-18.312c-16.036,0-32.072,6.104-44.28,18.312c-4.41,4.41-10.204,6.615-15.996,6.615
		c-5.794,0-11.586-2.205-15.997-6.615c-12.208-12.208-28.245-18.312-44.281-18.312c-16.036,0-32.072,6.104-44.28,18.312
		c-7.811,7.811-7.811,20.474,0,28.284c7.81,7.81,20.473,7.811,28.284,0c4.41-4.41,10.203-6.615,15.997-6.615
		s11.586,2.205,15.997,6.616c12.208,12.208,28.244,18.312,44.28,18.312s32.073-6.104,44.281-18.312
		c4.41-4.411,10.204-6.616,15.997-6.616s11.586,2.205,15.996,6.616c11.827,11.827,27.554,18.341,44.28,18.341c0,0,0,0,0,0h0
		c16.727,0,32.453-6.514,44.281-18.342c4.41-4.41,10.204-6.615,15.997-6.615s11.586,2.205,15.996,6.616
		c11.827,11.827,27.554,18.341,44.28,18.341h0h0c16.727,0,32.453-6.514,44.281-18.342c4.273-4.272,9.954-6.626,15.997-6.626
		c6.043,0,11.724,2.354,15.997,6.626c7.811,7.81,20.473,7.811,28.284,0C463.894,434.458,463.894,421.794,456.083,413.984z"
							/>
						</svg>
					</div>

					<Link
						href={`https://github.com/${Constants.owner}/${Constants.repo}/blob/main/${Router.query.ship}/${Router.query.sail}.md`}
						target="_blank"
						rel="noreferrer noopener"
						className="flex flex-col group"
					>
						<div className="flex flex-row items-center bg-isGrayLight2 group-hover:bg-isGrayDark4 delay-50 duration-300 ease-in-out py-[3px] md:py-[4px] lg:py-[5px] px-[7px] md:px-[8px] lg:px-[9px] rounded-md md:rounded-lg lg:rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="mr-[6px] w-5 h-5 md:h-6 md:w-6 lg:h-7 lg:w-7 fill-isWhite group-hover:fill-isWhite stroke-none delay-50 duration-300 ease-in-out"
							>
								<path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
								<path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
							</svg>

							<div className="text-sm font-bold transition duration-300 ease-in-out delay-50 md:text-md lg:text-lg text-isWhite group-hover:text-isWhite ">
								Edit on GitHub
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="ml-[6px] w-5 h-5 md:h-6 md:w-6 lg:h-7 lg:w-7 fill-isWhite group-hover:fill-isWhite stroke-none delay-50 duration-300 ease-in-out"
							>
								<title>Edit on GitHub</title>
								<path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
							</svg>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default SectionPanel;
