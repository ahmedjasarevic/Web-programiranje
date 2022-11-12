
function dajTekst(){
var data = document.getElementById("funkcija").value;
var broj = /\d+/g;
var rezultat = data.match(broj);
console.log(rezultat);
crtaj();
}

function crtaj(){
    var c = document.getElementById("slika");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();
 
}

