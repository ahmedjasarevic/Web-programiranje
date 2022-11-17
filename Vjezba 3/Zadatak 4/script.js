
function dajTekst(){
var data = document.getElementById("funkcija").value;
var broj = /-?\d+/g;
var rezultat = data.match(broj);
console.log(rezultat);
jednacina(rezultat);
}


function jednacina(rezultat){
    var epsilon = 0.001;
for(var x = -100; x < 100; x+=0.001){
if(math.abs(+rezultat[0]*math.pow(x,+rezultat[1])+ +rezultat[2]+ +rezultat[3]) < epsilon){
console.log(x);
}
}
}


function crtaj(){
  const canvas = document.getElementById('slika');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}

