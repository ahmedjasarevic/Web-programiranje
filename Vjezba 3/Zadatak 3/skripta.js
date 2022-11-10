var jedinice = ["jedan","dva","tri","cetiri","pet","sest","sedam","osam","devet"];
var desetice = ["deset","dvadeset","trideset","cetrdeset","pedeset","sestdeset","sedamdeset","osamdeset","devedeset"];
var stotice = ["stotinu","dvijestotine","tristotine","cetiristotine","petstotina","seststotina","sedamstotina","osamstotina","devetstotina"];
var special = ["jedanaest","dvanaest","trinaest","cetrnaest","petnaest","sestnaest","sedamnaest","osamnaest","devetnaest"];

function promjeni(){

    var data = document.getElementById("tekst").value;
    var broj = /\d+/g;
    var rezultat = data.match(broj);
    for(var i in rezultat){
       data = data.replace(rezultat[i],pretvori(rezultat[i]));
    }
    console.log(data);
    alert(data);

}


function pretvori(num){
    var pretvorenitekst = "";
    var cifra,cifra2,cifra3,cifra4,cifra5,cifra6,cifra7;
    if(num <= 10){
        if(num == 10){
            pretvorenitekst += "deset";
        }
        else{
        pretvorenitekst += jedinice[num-1]; //jednocifreni
        }
    }

    if(num < 100 && num > 10){  // dvocifreni
        if(num > 10 && num < 20){
            cifra = num.toString()[1];
            pretvorenitekst += special[cifra-1]; 
        }
        else{
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        pretvorenitekst += desetice[cifra-1]; 
        if(cifra2 == 0){
            pretvorenitekst += "";

        } else{
        pretvorenitekst += jedinice[cifra2 - 1];
        }
    }
       
        
    }
    if(num >= 100 && num < 999){ // trofcifreni
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
    if(num > 999 && num <= 9999){ // cetverocifreni
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        cifra3 = num.toString()[2];
        cifra4 = num.toString()[3];
        if(cifra == 1){
            pretvorenitekst += "jednahiljada";
        }
        else if(cifra == 2){
            pretvorenitekst += "dvijehiljade";
        }
        else if(cifra == 3){
            pretvorenitekst += "trihiljade";
        }
        else if(cifra == 4){
            pretvorenitekst += "cetirihiljade";
        }
        else{
            pretvorenitekst += jedinice[cifra-1];
            pretvorenitekst += "hiljada";
        }
        if(cifra2 == 0){
            pretvorenitekst += "";

        } else{
            pretvorenitekst += stotice[cifra2-1];
        }
        if(cifra3 == 0){
            pretvorenitekst += "";

        } else{
            pretvorenitekst += desetice[cifra3-1];
        }
        if(cifra4 == 0){
            pretvorenitekst += "";

        } else{
            pretvorenitekst += jedinice[cifra4 - 1];
        }
    }

    if(num  > 9999 && num < 99999){ // peterocifreni
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        cifra3 = num.toString()[2];
        cifra4 = num.toString()[3];
        cifra5 = num.toString()[4];
       if(cifra == 1){
        if(cifra2 == 0){

            pretvorenitekst += "desethiljada";

        }
        else{
            pretvorenitekst += special[cifra2-1];
            pretvorenitekst += "hiljada";

        }
       }
       if(cifra > 1){
        pretvorenitekst += desetice[cifra-1];
        pretvorenitekst += "hiljada";
       }
       if(cifra3 == 0){
        pretvorenitekst += "";
        } 
        else{
        pretvorenitekst += stotice[cifra3-1];
        }
        if(cifra4 == 0){
            pretvorenitekst += "";
    
            } 
            else{
                pretvorenitekst += desetice[cifra4-1];
            }
            if(cifra5 == 0){
                pretvorenitekst += "";
        
                } 
                else{
                    pretvorenitekst += jedinice[cifra5-1];
                }
    

       
        
    }


    if(num  > 99999  && num <= 999999  ){ // sestocifreni
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        cifra3 = num.toString()[2];
        cifra4 = num.toString()[3];
        cifra5 = num.toString()[4];
        cifra6 = num.toString()[5];
      pretvorenitekst += stotice[cifra-1];
      if(cifra2 == 0){
        pretvorenitekst += "";

    } else{
        pretvorenitekst += desetice[cifra2-1];
    }
    if(cifra3 == 0){
        pretvorenitekst += "";

    } else{
        pretvorenitekst += jedinice[cifra3-1];
    }
    if(cifra == 1 && cifra2 == 1){
        pretvorenitekst += "hiljada";
    }
    else{
      pretvorenitekst += "hiljade";
    }
      if(cifra4 == 0){
        pretvorenitekst += "";

    } else{
        pretvorenitekst += stotice[cifra4-1];
    }
    if(cifra5 == 0){
        pretvorenitekst += "";

    } else{
   
        pretvorenitekst += desetice[cifra5-1];
    }
    if(cifra5 == 0){
        pretvorenitekst += "";

    } else{
   
        pretvorenitekst += jedinice[cifra6-1];
    }

    
    }

    if(num > 999999 && num < 9999999){
        cifra = num.toString()[0];
        cifra2 = num.toString()[1];
        cifra3 = num.toString()[2];
        cifra4 = num.toString()[3];
        cifra5 = num.toString()[4];
        cifra6 = num.toString()[5];
        cifra7 = num.toString()[6];
        pretvorenitekst += jedinice[cifra-1];
        pretvorenitekst += "milion";
        if(cifra2 == 0){
            pretvorenitekst += "";
    
        } else{
            pretvorenitekst += stotice[cifra2-1];
        }
        if(cifra3 == 0){
            pretvorenitekst += "";
    
        } else{
            pretvorenitekst += desetice[cifra3-1];
        }
        if(cifra4 == 0){
            pretvorenitekst += "";
    
        } else{
            pretvorenitekst += jedinice[cifra4-1];
            pretvorenitekst += "hiljade";
        }
        if(cifra5 == 0){
            pretvorenitekst += "";
    
        } else{
            pretvorenitekst += stotice[cifra5-1];
        }
        if(cifra6 == 0){
            pretvorenitekst += "";
    
        } else{
            pretvorenitekst += desetice[cifra6-1];
        }
        if(cifra7 == 0){
            pretvorenitekst += "";
    
        } else{
            pretvorenitekst += jedinice[cifra7-1];
        }
    }
    return pretvorenitekst;

}