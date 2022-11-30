let correctaspez=[4,1,4,3,1]

let opcion_elegidapez=[]

let cantidad_correctaspez=0;

function respuestapez(numpez,selpez){
    opcion_elegidapez[numpez]=selpez.value;
    id="p"+numpez;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    selpez.parentNode.style.backgroundColor="#09606aa1"

}
function corregirpez(){
    cantidad_correctaspez=0;
    for(e=0; e< correctaspez.length;e++){
        if (correctaspez[e]==opcion_elegidapez[e]){
            cantidad_correctaspez++
        }

    }
    if(cantidad_correctaspez==0){
        document.getElementById("conclusionpez").innerHTML= "No eres apto para cuidar a un pez por ahora, debes aprender más.";
    }
    else if (cantidad_correctaspez==1 || cantidad_correctaspez==2){
        document.getElementById("conclusionpez").innerHTML= "Quiza en un futuro puedas cuidar a un pez, debes aprender más.";
    }
    else if (cantidad_correctaspez==4 || cantidad_correctaspez==3){
        document.getElementById("conclusionpez").innerHTML= "Estas capacitado para cuidar a un pez, lo podras hacer bien.";
    }
    else if (cantidad_correctaspez==5){
        document.getElementById("conclusionpez").innerHTML= "Estas muy capacitado para cuidar a un pez.";
    }
    else{
        document.getElementById("conclusionpez").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadopez").innerHTML= cantidad_correctaspez;
    
}