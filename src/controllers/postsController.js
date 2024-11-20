import { getTodosPosts } from "../models/postsModel.js";

export async function listarTodosPosts(req, res) {
    const posts = await getTodosPosts();

    return res.status(200).json(posts);
}