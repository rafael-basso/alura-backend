import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const cats = [
    {id: 1, description: "desc-1", url: "https://placecats.com/300/200"},
    {id: 2, description: "desc-2", url: "https://placecats.com/300/200"},
    {id: 3, description: "desc-3", url: "https://placecats.com/300/200"},
    {id: 4, description: "desc-3", url: "https://placecats.com/300/200"},
];

app.get("/api", (req, res) => {
    res.status(200).send("<h1>Projeto Alura</h1>");
});

app.get("/cats", (req, res) => {
    res.status(200).json(cats);
});

app.get("/cats/:id", (req, res) => {
    const catIndex = cats.findIndex((cat) => {
        return cat.id === Number(req.params.id);
    });
    
    if (catIndex < 0) {
        res.status(404).json({
            success: false,
            status: res.statusCode,
            message: "Cat not found"
        });
    } else {
        res.status(200).json(cats[catIndex]);
    }
});

app.listen (port, () => {
    console.log(`Server running on ${port}`);
});