import express from 'express';
import { listarPosts, listarPostPorId, criarPost, uploadImagem, deletarPost, atualizarPost } from '../controllers/postsController.js';
import multer from 'multer';
import cors from 'cors';

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

//o caminho ./uploads é a pasta raiz do projeto. Precisa criar esta pasta manualmente
const upload = multer({ dest: "./uploads" , storage});

//se for Linux ou Mac
// const upload = multer({dest: "./uploads"})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/api", listarPosts);
    app.get("/api/:id", listarPostPorId);
    app.post("/api", criarPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.delete("/api/:id", deletarPost);
    app.put("/upload/:id", atualizarPost);
}

export default routes;