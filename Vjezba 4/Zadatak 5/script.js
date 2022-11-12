function promjena(){
var data = document.getElementById("unos").value;
var regex = /(?<src>\d+\.\d+\.\d+\.\d+).+\]\s\"(?<http_method>\w+)\s(?<uri_path>\S+)\s(?<uri_query>\S+)\"\s(?<status>\d+)\s(?<bytes>[\d-]+)/gm;
var zamjena = data.match(regex);
provjeri();


}



function provjeri(){
    if(zamjena.match(/\b404\b/g)){
       return console.log(zamjena);
    }

}