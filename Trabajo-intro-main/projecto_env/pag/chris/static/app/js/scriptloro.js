let correctasloro=[1,2,3,1,1]

let opcion_elegidaloro=[]

let cantidad_correctasloro=0;

function respuestaloro(numloro,seleccionadaloro){
    opcion_elegidaloro[numloro]=seleccionadaloro.value;
    id="p"+numloro;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    seleccionadaloro.parentNode.style.backgroundColor="#09606aa1"

}
function seleccionadaloro(){
    cantidad_correctasloro=0;
    for(a=0; a< correctasloro.length;a++){
        if (correctasloro[a]==opcion_elegidaloro[a]){
            cantidad_correctasloro++
        }

    }
    if(cantidad_correctasloro==0){
        document.getElementById("conclusionloro").innerHTML= "no eres apto para cuidar a un loro por ahora, debes aprender más.";
    }
    else if (cantidad_correctasloro==1 || cantidad_correctasloro==2){
        document.getElementById("conclusionloro").innerHTML= "quiza en un futuro puedas cuidar a un loro, debes aprender más.";
    }
    else if (cantidad_correctasloro==3 || cantidad_correctasloro==4){
        document.getElementById("conclusionloro").innerHTML= "Estas capacitado para cuidar a un loro, lo podras hacer bien.";
    }
    else if (cantidad_correctasloro==5){
        document.getElementById("conclusionloro").innerHTML= "Estas muy capacitado para cuidar a un loro.";
    }
    else{
        document.getElementById("conclusionloro").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadoloro").innerHTML= cantidad_correctasloro;
    
}