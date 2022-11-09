
document.write("<table width=\"70%\" height = \"50%\">");
for(var i = 1; i<=10; i++){
    if(i % 2 == 0 ){
    document.write('"<tr style ="background-color: white">');
    }
    else{
        document.write('"<tr style ="background-color: #FFF2CC">');
    }
    document.write('"<th style = "background-color: #CCCCCC">' + i+ "</th>"); 
    for(var j = 1; j<=10; j++){
        if(i== 1 && j <= 10 ){
            document.write('"<th style = "background-color: #CCCCCC">' + i*j + "</th>"); 
        }
        else{
            document.write("<td>" + i*j + "</td>"); 
        }
    }
    document.write("</tr>");
}
document.write("</table>")
