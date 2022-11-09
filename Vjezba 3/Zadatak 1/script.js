var odgovor = prompt("Kako se zoves?", "Imenom i prezimenom(default)"); if (odgovor!=null && odgovor!="") 
{ 
var r=confirm("Pritisnite OK da prikazete ime u alertboxu a Cancel za prikaz direktno na stranici"); 
if (r==true) // ili if(r) 
alert(odgovor); 
else 
document.write(odgovor); 
}

var odgovor = prompt("Unesi tekst: "); if (odgovor!=null && odgovor!="") 
{ 
var r=confirm("Pritisnite OK da prikazete tekst u alertboxu a Cancel za prikaz direktno na stranici"); 
if (r==true) // ili if(r) 
alert(odgovor); 
else 
document.write(odgovor); 
}