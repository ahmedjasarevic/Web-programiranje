var jedinice = ["jedan","dva","tri","cetiri","pet","sest","sedam","osam","devet"];
var desetice = ["deset","dvadeset","trideset","cetrdeset","pedeset","sestdeset","sedamdeset","osamdeset","devedeset"];
var stotice = ["stotinu","dvijestotine","tristotine","cetiristotine","petstotina","seststotina","sedamstotina","osamstotina","devetstotina"];

function promjeni(){

    var data = document.getElementById("tekst").value;
    var num = data.replace(/[^0-9]/g,'');
    console.log(pretvori(num));
}


function pretvori(num){
    var pretvorenitekst = "";
    var cifra,cifra2,cifra3,cifra4;
    if(num <= 10){
        if(num == 10){
            pretvorenitekst += "deset";
        }
        else{
        pretvorenitekst += jedinice[num-1]; //jednocifreni
        }
    }

    if(num < 100 && num > 10){  // dvocifreni
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        pretvorenitekst += desetice[cifra-1]; 
        if(cifra2 == 0){
            pretvorenitekst += "";

        } else{
        pretvorenitekst += jedinice[cifra2 - 1];
        }
       
        
    }
    if(num > 100 && num < 999){ // trofcifreni
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        cifra3 = num.toString()[2];
        pretvorenitekst += stotice[cifra-1];
        if(cifra2 == 0){
            pretvorenitekst += "";

        } else{
            pretvorenitekst += desetice[cifra2-1];
        }
        if(cifra3 == 0){
            pretvorenitekst += "";

        } else{
            pretvorenitekst += jedinice[cifra3 - 1];
        }
   
    
    }
    if(num > 999 && num < 9999){ // cetverocifreni
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        cifra3 = num.toString()[2];
        cifra4 = num.toString()[3];
        if(cifra == 1){
            pretvorenitekst += "jedna";
        }
        else if(cifra == 2){
            pretvorenitekst += "jedna";
        }
        else{
        pretvorenitekst += jedinice[cifra-1];
        }
        pretvorenitekst += "hiljada";
        pretvorenitekst += stotice[cifra2-1];
        pretvorenitekst += desetice[cifra3-1];
        pretvorenitekst += jedinice[cifra4 - 1];
    }
    return pretvorenitekst;

}