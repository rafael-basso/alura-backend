import express from 'express';
import { listarPosts, listarPostPorId } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json());

    app.get("/api", listarPosts);
    app.get("/api/:id", listarPostPorId);
}

export default routes;