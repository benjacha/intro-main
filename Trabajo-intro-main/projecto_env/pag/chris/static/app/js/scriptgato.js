let correctasgato=[2,3,4,1,1]

let opciongato=[]


let cantidadgatos=0;

function respuestagato(num,selec){
    opciongato[num]=selec.value;
    id="p"+num;
    
    labels = document.getElementById(id).childNodes;
    if (num == 3 || num == 4 || num == 5 || num == 6){
        labels [3]. style. backgroundColor = "#EDF2F7";
        labels [5]. style. backgroundColor = "#EDF2F7";
    }
    else if (num == 0 || num == 2 ){
        labels [3]. style. backgroundColor = "#EDF2F7";
        labels [5]. style. backgroundColor = "#EDF2F7";
        labels [7]. style. backgroundColor = "#EDF2F7";
        labels [9]. style. backgroundColor = "#EDF2F7";   
    } 
    else{
        labels [3]. style. backgroundColor = "#EDF2F7";
        labels [5]. style. backgroundColor = "#EDF2F7";
        labels [7]. style. backgroundColor = "#EDF2F7";
    selec.parentNode.style.backgroundColor="#09606aa1"
}}
function corregirgato(){
    cantidadgatos=0;
    for(p=0; p< correctasgato.length;p++){
        if (correctasgato[p]==opciongato[p]){
            cantidadgatos++
        }
    }
    if(cantidadgatos==0){
        document.getElementById("conclusiongato").innerHTML= "no eres apto para cuidar a un gato por ahora, debes aprender más.";
    }
    else if (cantidadgatos==1){
        document.getElementById("conclusiongato").innerHTML= "quiza en un futuro puedas cuidar a un gato, debes aprender más.";
    }
    else if (cantidadgatos==4){
        document.getElementById("conclusiongato").innerHTML= "Estas capacitado para cuidar a un gato, lo podras hacer bien.";
    }
    else if (cantidadgatos==5){
        document.getElementById("conclusiongato").innerHTML= "Estas muy capacitado para cuidar a un gato.";
    }
    else{
        document.getElementById("conclusiongato").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadogato").innerHTML= cantidadgatos;
    
}