const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/unos', (req, res) => {
  res.sendFile(__dirname + '/forma.html');
});

app.post('/', (req, res) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const number = req.body.number;
  res.send(`Ime: ${name} Prezime: ${lastname} Adresa: ${address} Broj telefona: ${number}`);
});

app.listen(8085, () => {
  console.log('Server listening on port 8085');
});
