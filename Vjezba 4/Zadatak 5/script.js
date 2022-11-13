function promjena(){
var data = document.getElementById("unos").value;
var regex = /(?<src>\d+\.\d+\.\d+\.\d+).+\]\s\"(?<http_method>\w+)\s(?<uri_path>\S+)\s(?<uri_query>\S+)\"\s(?<status>\d+)\s(?<bytes>[\d-]+)/gm;
var match
var zamjena = data.match(regex);
var duzina = zamjena.length;
for(var i = 0; i < duzina; i++){
    if(zamjena[i].match(/\b404\b/g)){
        document.getElementById('unos').value = zamjena[i];
}
else{
    continue;
}
}


}



