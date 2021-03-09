const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.status(200).send({result: "GET"});
});

app.post('/', (req, res) => {
    res.status(200).send({result: "POST"});
});

app.put('/', (req, res) => {
    res.status(200).send({result: "PUT"});
});

app.delete('/', (req, res) => {
    res.status(200).send({result: "DELETE"});
});

const server = app.listen(PORT, () => {
    console.log("Express server running on port ", PORT);
});



module.exports = server;