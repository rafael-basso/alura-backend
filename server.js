import express from 'express';
import routes from './src/routes/postsRoutes.js';

const app = express();
routes(app);

const port = 3000;
app.listen (port, () => {
    console.log(`Server running on ${port}`);
});

// app.get("/cats", (req, res) => {
//     res.status(200).json(cats);
//     res.status(200).send("<h1>Projeto Alura</h1>");
// });

// app.get("/cats/:id", (req, res) => {
//     const catIndex = cats.findIndex((cat) => {
//         return cat.id === Number(req.params.id);
//     });
    
//     if (catIndex < 0) {
//         res.status(404).json({
//             success: false,
//             status: res.statusCode,
//             message: "Cat not found"
//         });
//     } else {
//         res.status(200).json(cats[catIndex]);
//     }
// });

