import clientPromise from "../../../mongodb";
import UsersDAO from "../../../mongodb/dao/usersDAO";

const handler = async (req, res) => {
	if (req.method === "POST") {
		try {
			const client = await clientPromise;

			await UsersDAO.injectDB(client);
			await UsersDAO.updateUsername(req, res);
		} catch (err) {
			res.status(500).json({
				code: 500,
				message: err.message,
			});
		}
	} else {
		res.status(500).json({
			code: 421,
			message: "Invalid Route.",
		});
	}
};

export default handler;
