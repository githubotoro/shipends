export const PageView = (url) => {
	if (window !== undefined) {
		window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
			page_path: url,
		});
	}
};
