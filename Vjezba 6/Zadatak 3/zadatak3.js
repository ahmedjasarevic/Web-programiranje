const http = require('http');
const fs = require('fs');
const url = require('url');
const os = require('os');
http.createServer(function(req,res){
    if(req.method=='POST'){
    let tijeloZahtjeva = '';
    req.on('data',function(data){
    tijeloZahtjeva+=data;
    });
    req.on('end',function(){
    //primljen čitav zahtjev
    let parametri = new url.URLSearchParams(tijeloZahtjeva);
    let novaLinija = parametri.get('ime')+","+parametri.get('prezime')+
    ","+parametri.get('adresa')+","+parametri.get('broj_telefona') ;
    fs.appendFile('imenik.txt',novaLinija + os.EOL,function(err){
    if(err) throw err;
    console.log("Novi red uspješno dodan!");

    let korisnici = [];

    const lines = fs.readFileSync("imenik.txt").toString().split("\r\n");


    for(let i = 0; i < lines.length - 1; i++){
        var linija = lines[i].split(',');
        korisnici.push({
            ime: linija[0],
            prezime: linija[1],
            adresa: linija[2],
            broj_telefona: linija[3]
        });
    }
    res.writeHead(200,{});
    res.end(`
     ${korisnici.map((user) => `${user.ime} ${user.prezime} ${user.adresa} ${user.broj_telefona}` + os.EOL).join('')}
    `);
    });
    });
    }
    }).listen(8080);