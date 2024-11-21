import { getTodosPosts, getPostPorId, postNovoPost } from "../models/postsModel.js";
import fs from 'fs';

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();

    return res.status(200).json(posts);
}

export async function listarPostPorId(req, res) {
    const id = String(req.params.id);
    
    if (id.length < 24) {
        return res.status(400).json({
            status: res.statusCode,
            message: "Incorrect ID value."
        });
    } else {
        const post = await getPostPorId(id);
        
        if (post) {
            return res.status(200).json(post);
        } else {
            return res.status(404).json({
                status: res.statusCode,
                message: "Post not found."
            });
        }
    }
}

export async function criarPost(req, res) {
    const novoPost = req.body;
    
    try {
        const postCriado = await postNovoPost(novoPost);
        
        return res.status(201).json(postCriado);
    } catch (error) {
        console.log(error.message);

        return res.status(500).json({
            status: res.statusCode,
            message: "Erro na requisição"
        });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await postNovoPost(novoPost);
        
        // renomear nome do arquivo com o id retornado do banco, seguindo o caminho da pasta raiz
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada);
        
        res.status(201).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}