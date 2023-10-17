const express = require('express');
const app = express();

app.use(express.json());

app.post('/prediction', (req, res) => {
    const data = {
        'prediction': Math.round(Math.random() * 100) / 100,
        'model_id': '1'
    }
    res.status(200).json(data);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});