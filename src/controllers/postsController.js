import { getTodosPosts, getPostPorId } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();

    return res.status(200).json(posts);
}

export async function listarPostPorId(req, res) {
    const id = String(req.params.id);
    
    const post = await getPostPorId(id);

    return res.status(200).json(post);
}