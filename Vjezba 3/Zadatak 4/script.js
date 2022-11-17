
function dajTekst(){
var data = document.getElementById("funkcija").value;
var broj = /-?\d+/g;
var rezultat = data.match(broj);
console.log(rezultat);
jednacina(rezultat);
}


function jednacina(rezultat){
  const canvas = document.getElementById('slika');
  if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      
      var korak = 0.1

      // Koordinatni sistem
      ctx.moveTo(100, 200);
      ctx.lineTo(100, 0);
      ctx.moveTo(0, 100);
      ctx.lineTo(200, 100);
      
      // Pocetna tacka je u (0, yp), ali je yp izvan okvira canvasa pa sam ostavio u (0,0)
      ctx.moveTo(0, 0);

      // Pocetak crtanja na intervalu [-5, 5]
      // Funkija y = x(x-2.5)
      for(var x = -5; x < 5; x += korak) {
        console.log(rezultat);
          var y = rezultat[0] * math.pow(x,rezultat[1]) + (rezultat[2] * x) + rezultat[3] * 1.0;// x^2 - 2.5x = x(x-2.5) pa su nule u x=0 i x=2.5
          console.log(math.pow(x,rezultat[1]));
          console.log(x);
          console.log(y);
          // X-osa
          // Skaliranje: za x = -5, x' = 0
          // Skaliranje: za x = 5, x' = 200
          // Zato sam stavio (x+5)*20

          // Y-osa
          // Znamo da je transformacija y -> y': y' := -y (obrnuto okrenuta)
          // Skaliranje: za y=-5, y'=200
          // Skaliranje: za y=5, y'=0 
          ctx.lineTo(20 * (x + 5),  20 * (-1*(y - 5)));
          ctx.moveTo(20 * (x + 5),  20 * (-1*(y - 5)));
          ctx.stroke();
      }
  }
}

