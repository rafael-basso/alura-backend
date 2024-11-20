import dbConnect from '../config/config.js';

const connString = process.env.CONNECTION_STRING;
const conexao = await dbConnect(connString);

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}