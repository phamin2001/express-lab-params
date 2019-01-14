const express = require('express');
const app     = express();

app.get('/greeting/', (req, res) => {
    res.send('Hello stranger');
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log((req.params.total * req.params.tipPercentage) / 100);
    const answer = (req.params.total * req.params.tipPercentage) / 100;
    res.send(`${answer}`);
});

app.get('/greeting/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello, ' + req.params.name);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})