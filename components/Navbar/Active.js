export const getActive = (path) => {
	if (path === "/") {
		return "home";
	} else if (path.slice(1, 6) === "learn") {
		return "learn";
	} else if (path.slice(1, 8) === "profile") {
		return "profile";
	} else {
		return "none";
	}
};
