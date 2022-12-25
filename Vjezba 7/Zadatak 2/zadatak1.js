const express = require('express');
const fs = require('fs');
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
  fs.appendFile('form-data.txt', `Ime: ${name} Prezime: ${lastname} Adresa: ${address} Broj telefona: ${number}\n`, (err) => {
    if (err) throw err;
    console.log('Uspjesno');
  });
  res.send(`Ime: ${name} Prezime: ${lastname} Adresa: ${address} Broj telefona: ${number}`);
});


app.get('/', (req, res) => {
  fs.readFile('form-data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data.split('\n').join('<br>'));
  });
});


app.listen(8085, () => {
  console.log('Server listening on port 8085');
});
