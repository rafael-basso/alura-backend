import express from 'express';
import { listarTodosPosts } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json());

    app.get("/api", listarTodosPosts);
}

export default routes;