const express = require('express');
const app = express();

let port = 3000;
let host = 'localhost';

app.use(express.static('public'));

app.get('/random-number', (req, res) =>{
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ number: randomNumber });
});

app.listen(port, host, ()=>{
    console.log('The server is listening on port ' + port);
});
