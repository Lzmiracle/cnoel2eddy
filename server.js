const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Pour les données JSON

// Données temporaires en mémoire
let citations = [];
let defis = [];
let descriptions = [];

// Routes API
app.get('/api/citations', (req, res) => res.json(citations));
app.post('/api/citations', (req, res) => {
    const citation = req.body;
    citations.push(citation);
    res.status(201).json(citation);
});

app.get('/api/defis', (req, res) => res.json(defis));
app.post('/api/defis', (req, res) => {
    const defi = req.body;
    defis.push(defi);
    res.status(201).json(defi);
});

app.get('/api/descriptions', (req, res) => res.json(descriptions));
app.post('/api/descriptions', (req, res) => {
    const description = req.body;
    descriptions.push(description);
    res.status(201).json(description);
});

// Supprimer un élément
app.delete('/api/citations/:index', (req, res) => {
    const index = parseInt(req.params.index);
    citations.splice(index, 1);
    res.status(204).send();
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur actif sur http://localhost:${PORT}`));
