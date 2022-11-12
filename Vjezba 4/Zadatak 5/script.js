function promjena(){
var data = document.getElementById("unos").value;
var regex = /^(\S*).*\[(.*)\]\s"(\S*)\s(\S*)\s([^"]*)"\s(\S*)\s(\S*)\s"([^"]*)"\s"([^"]*)"$/;
var zamjena = data.match(regex);

document.getElementById('unos').value = zamjena[2] + " " + zamjena[4] + " " + zamjena[6];



}



