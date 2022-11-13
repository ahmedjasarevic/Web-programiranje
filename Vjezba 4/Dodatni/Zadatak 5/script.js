var slider = document.querySelector('.slider-img');
var images = ['dashboard.png','dodajartikal.png','login.png','pocetnastranica.png','register.png','transakcije.png'];
var i = 0;
function next(){
if( i >= images.length-1) i=-1;
i++;
return setImg();
}

function setImg(){
    return slider.setAttribute('src','images/'+images[i]);
}