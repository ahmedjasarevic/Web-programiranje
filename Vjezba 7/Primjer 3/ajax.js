function ispisi(error,token){
    if(!error) console.log(token);
    }
    function getAccessToken(proslijedi){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {// Anonimna funkcija
    if (ajax.readyState == 4 && ajax.status == 200)
    proslijedi(null,JSON.parse(ajax.responseText).access_token);
    else if (ajax.readyState == 4)
    proslijedi(ajax.status,null);
    }
    ajax.open("POST", "https://bitbucket.org/site/oauth2/access_token", true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.setRequestHeader("Authorization", 'Basic ' + btoa('dKB5NbafCPmnEGBgaY:GVJPFzxs3pU9RhDffumDzMJGYraA2BBB'));
    ajax.send("grant_type="+encodeURIComponent("client_credentials"));
    }
    getAccessToken(ispisi);

    function listRepositories(error,token){
        if(error) throw error;
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200)
        {
        console.log(ajax.responseText);
        console.log(JSON.parse(ajax.responseText).values[0].name);
        console.log(JSON.parse(ajax.responseText).values[0].owner.username);
        //Dodajte dio koji će u HTML ispisati tabelu sa repozitorijima
        //Podatke parsirajte sa var podaci = JSON.parse(ajax.responseText);
        //Imena repozitorija možete dobiti sa podaci.values[i].name
        //Imena vlasnika repozitorija sa podaci.values[i].owner.username
        }
        else if (ajax.readyState == 4)
        console.log(ajax.status);
        }
        ajax.open("GET","https://api.bitbucket.org/2.0/repositories?role=member");
        ajax.setRequestHeader("Authorization", 'Bearer ' + token);
        ajax.send();
        }