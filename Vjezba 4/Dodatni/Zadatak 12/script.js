function provjeriDatum(){
    var d_reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var datum = document.getElementById('datum').value;
    if (d_reg.test(datum)) {
        console.log("Ispravan datum");}
      else{
        console.log("Neispravan datum");
      }
if(datum[1] == '/' || datum[2] == '/'){
    var datumArray = datum.split("/");
}
else{
    var datumArray = datum.split("-");
}
      var dan = datumArray[0];
      var mjesec = datumArray[1];
      var godina = datumArray[2];

}


function pronadjiZnak(dan,mjsec){
    var imeZnaka = ["Aries","Libra","Taurus","Scorpio"];
    var pocetniDanZnaka = [21,23,21,23];
    var krajnjiDanZnaka = [20,22,21,21];
    var pocetniMjesecZnaka = [3,9,4,10];
    var krajnjiMjesecZnaka = [4,10,5,11];
    
}