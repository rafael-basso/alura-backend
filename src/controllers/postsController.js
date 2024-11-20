import { getTodosPosts, getPostPorId } from "../models/postsModel.js";

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