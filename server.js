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

app.get('/magic/:question', (req, res) => {
    const magic8ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const randNum = Math.floor(Math.random() * 8);
    console.log(req.params.question + magic8ball[randNum]);
    res.send(req.params.question + " " + magic8ball[randNum]);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})