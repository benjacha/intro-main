let cant=0;

function suma(){
    cant++;
    document.getElementById("a").innerHTML= cant;
}
function total(lista){
    x= lista.length ;
    document.getElementById("x").innerHTML= x;
}
var x= 0
function ver(lista,user){
    for  ( a in lista ){
        if (a[1] == user ){
            document.getElementById("x").innerHTML= "nashe";    
            x=1
        }
    }
    if ( x == 0){
        document.getElementById("x").innerHTML= "na";
    }    
    
    
}