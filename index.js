const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.status(200).send('GET');
});

app.post('/', (req, res) => {
    res.status(200).send('POST');
});

app.put('/', (req, res) => {
    res.status(200).send('PUT');
});

app.delete('/', (req, res) => {
    res.status(200).send('DELETE');
});

app.listen(PORT, () => {
    console.log("Express server running on port ", PORT);
});