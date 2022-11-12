function promjena(){
var data = document.getElementById("unos").value;
var zamjena = data.replace(/\bfor\b/g, 'while'); 
console.log(zamjena);
document.getElementById('unos').value = zamjena;
}
