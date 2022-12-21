
const fs = require('fs');
let korisnici = [];

const lines = fs.readFileSync("imenik.txt").toString().split("\r\n");


    for(let i = 0; i < lines.length; i++){
        var linija = lines[i].split(',');
        korisnici.push({
            ime: linija[0],
            prezime: linija[1],
            adresa: linija[2],
            broj_telefona: linija[3]
        });
    }


fs.writeFileSync("users.json",JSON.stringify(korisnici));