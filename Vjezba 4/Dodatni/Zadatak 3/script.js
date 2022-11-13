document.write("<table width=\"70%\" height = \"50%\">");
for(var i = 1; i<=10; i++){
    if(i % 2 == 0 ){
    document.write('"<tr style ="background-color: white">');
    }
    else{
        document.write('"<tr style ="background-color: gray">');
    }
    for(var j = 1; j<=10; j++){
            document.write("<td>" + i*j + "</td>"); 
    }
    document.write("</tr>");
}
document.write("</table>")