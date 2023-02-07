import { MongoClient } from "mongodb";

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

let client;
let clientPromise;

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
