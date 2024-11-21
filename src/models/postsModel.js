import { ObjectId } from 'mongodb';
import dbConnect from '../config/config.js';

const connString = process.env.CONNECTION_STRING;
const conexao = await dbConnect(connString);
//conectar com o nome do db
const db = conexao.db("imersao-instabytes");
// acessar a coleção de documentos
const colecao = db.collection("posts");

export async function getTodosPosts() {
    return colecao.find().toArray();
}

export async function getPostPorId(id) {
    return colecao.findOne({ _id: new ObjectId(`${id}`) });
}

export async function postNovoPost(novoPost) {
    return colecao.insertOne(novoPost);
}

export async function deletePost(idPost) {
    return colecao.deleteOne({ _id: new ObjectId(`${idPost}`) });
}