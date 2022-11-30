let correctashuron=[1,1,2,2,2]

let opcion_elegidahuron=[]

let cantidad_correctashuron=0;

function respuestahuron(numhuron,selhuron){
    opcion_elegidahuron[numhuron]=selhuron.value;
    id="p"+numhuron;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    selhuron.parentNode.style.backgroundColor="#09606aa1"

}
function corregirhuron(){
    cantidad_correctashuron=0;
    for(h=0; h< correctashuron.length;h++){
        if (correctashuron[h]==opcion_elegidahuron[h]){
            cantidad_correctashuron++
        }

    }
    if(cantidad_correctashuron==0){
        document.getElementById("conclusionhuron").innerHTML= "No eres apto para cuidar a una huron por ahora, debes aprender más.";
    }
    else if (cantidad_correctashuron==1 || cantidad_correctashuron==2){
        document.getElementById("conclusionhuron").innerHTML= "Quiza en un futuro puedas cuidar a un huron, debes aprender más.";
    }
    else if (cantidad_correctashuron==3 || cantidad_correctashuron==4){
        document.getElementById("conclusionhuron").innerHTML= "Estas capacitado para cuidar a un huron, lo podras hacer bien.";
    }
    else if (cantidad_correctashuron==5){
        document.getElementById("conclusionhuron").innerHTML= "Estas muy capacitado para cuidar a un huron.";
    }
    else{
        document.getElementById("conclusionhuron").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadohuron").innerHTML= cantidad_correctashuron;
    
}
