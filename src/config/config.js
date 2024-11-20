import { MongoClient } from "mongodb";

export default async function dbConnect(connectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString);
        console.log("Conectando ao cluster do mongoDb...");
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");

        return mongoClient;
    } catch (error) {
        console.log("Falha ao conectar ao banco");
        process.exit();
    }
}