var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {// Anonimna funkcija
if (ajax.readyState == 4 && ajax.status == 200)
document.getElementById("polje").innerHTML = ajax.responseText;
if (ajax.readyState == 4 && ajax.status == 404)
document.getElementById("polje").innerHTML = "Greska: nepoznat URL";
}
ajax.open("GET", "sadrzaj.html", true);
ajax.send();