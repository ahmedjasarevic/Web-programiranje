function provjeriDatum(){
    var d_reg = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    var datum = document.getElementById('datum').value;
    console.log(datum);
    if (d_reg.test(datum)) {
        console.log("Ispravan datum");}
      else{
        console.log("Neispravan datum");
      }
}