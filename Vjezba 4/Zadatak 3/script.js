function promjena(){
    var data = document.getElementById("unos").value;
var regex = /(<([^>]+)>)/ig
,   body = data
,   result = body.replace(regex, "");
result = zamjenaNBSP(result);
result = zamjenaAMP(result);
result = zamjenaQOUT(result);
console.log(result);
document.getElementById('unos').value = result;
}


function zamjenaNBSP(text){
    var zamjenaNBSP = text.replace(/&nbsp;/g, ' ');
    return zamjenaNBSP;
}

function zamjenaAMP(text){
    var zamjenaAMP = text.replace(/&amp;/g, '&');
    return zamjenaAMP;
}


function zamjenaQOUT(text){
    var zamjenaQOUT = text.replace(/&qout;/g, '"');
    return zamjenaQOUT;
}