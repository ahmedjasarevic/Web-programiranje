var odgovor = prompt("Kako se zoves?", "Imenom i prezimenom(default)"); if (odgovor!=null && odgovor!="") 
{ 
var r=confirm("Pritisnite OK da prikazete ime u alertboxu a Cancel za prikaz direktno na stranici"); 
if (r==true) // ili if(r) 
alert(odgovor); 
else 
document.write(odgovor); 
}

function obrnutiString(str) {
    var obrnuti = '';
    for (var i = str.length - 1; i >= 0; i--){
        obrnuti = obrnuti + str[i];
}
return obrnuti;
}

var odgovor = prompt("Unesi tekst: "); if (odgovor!=null && odgovor!="") 
{ 
var r=confirm("Pritisnite OK da prikazete tekst u alertboxu a Cancel za prikaz direktno na stranici"); 
if (r==true) // ili if(r) 
alert(obrnutiString(odgovor));
else 
document.write(obrnutiString(odgovor));
}