
let colors = ['red', 'black', 'gray', 'blue'];

var i = 0;
document.querySelector("button").addEventListener("click", function(){
if(i < colors.length - 1){
    i++;
}
else{
    i = 0;
}
document.querySelector("body").style.background = colors[i];
})
