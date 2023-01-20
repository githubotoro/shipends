import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				{/* <link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					rel="stylesheet"
				/> */}
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100;200;300;400;500;600;700;800;900;1000&display=swap"
					rel="stylesheet"
				/>
				<Script
					strategy="lazyOnload"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script id="ga-script" strategy="lazyOnload">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						page_path: window.location.pathname,
						});
        			`}
				</Script>
			</Head>
			<body>
				{/* <svg className="fixed z-50 w-full h-full opacity-100 pointer-events-none isolate mix-blend-soft-light">
					<filter id="grains">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.70"
							numOctaves="5"
							stitchTiles="stitch"
						></feTurbulence>
					</filter>
					<rect
						width="100%"
						height="100%"
						filter="url(#grains)"
					></rect>
				</svg> */}

				<Main />

				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
