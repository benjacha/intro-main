let correctastor=[2,4,2,2,1]

let opcion_elegidator=[]

let cantidad_correctastor=0;

function respuestator(numtor,seleccionadator){
    opcion_elegidator[numtor]=seleccionadator.value;
    id="p"+numtor;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    seleccionadator.parentNode.style.backgroundColor="#09606aa1"

}
function corregirtor(){
    cantidad_correctastor=0;
    for(t=0; t< correctastor.length;t++){
        if (correctastor[t]==opcion_elegidator[t]){
            cantidad_correctastor++
        }

    }
    if(cantidad_correctastor==0){
        document.getElementById("conclusiontor").innerHTML= "No eres apto para cuidar a un tortuga por ahora, debes aprender más.";
    }
    else if (cantidad_correctastor==1 || cantidad_correctastor==2){
        document.getElementById("conclusiontor").innerHTML= "Quiza en un futuro puedas cuidar a un tortuga, debes aprender más.";
    }
    else if (cantidad_correctastor==3 || cantidad_correctastor==4){
        document.getElementById("conclusiontor").innerHTML= "Estas capacitado para cuidar a un tortuga, lo podras hacer bien.";
    }
    else if (cantidad_correctastor==5){
        document.getElementById("conclusiontor").innerHTML= "Estas muy capacitado para cuidar a un tortuga.";
    }
    else{
        document.getElementById("conclusiontor").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadotor").innerHTML= cantidad_correctastor;
    
}

