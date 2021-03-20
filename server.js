const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/palmira-sales-web'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/palmira-sales-web/index.html');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(PORT, () => {
    console.log('Servidor iniciado na porta' +  PORT);
});
