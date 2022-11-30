let correctas=[2,3,4,2,1,2,2]

let opcion_elegida=[]


let cantidad_correctas=0;

function respuesta(num_pregunta,seleccionada){
    opcion_elegida[num_pregunta]=seleccionada.value;
    id="p"+num_pregunta;
    
    labels = document.getElementById(id).childNodes;
    if (num_pregunta == 3 || num_pregunta == 4 || num_pregunta == 5 || num_pregunta == 6){
        
        labels [3]. style. backgroundColor = "#EDF2F7";
        labels [5]. style. backgroundColor = "#EDF2F7";
    }
    else if (num_pregunta == 0 || num_pregunta == 2 ){
        labels [3]. style. backgroundColor = "#EDF2F7";
        labels [5]. style. backgroundColor = "#EDF2F7";
        labels [7]. style. backgroundColor = "#EDF2F7";
        labels [9]. style. backgroundColor = "#EDF2F7";   
    } 
    else{
        labels [3]. style. backgroundColor = "#EDF2F7";
        labels [5]. style. backgroundColor = "#EDF2F7";
        labels [7]. style. backgroundColor = "#EDF2F7";
    seleccionada.parentNode.style.backgroundColor="#09606aa1"
}}

function corregir(){
    cantidad_correctas=0;
    for(i=0; i< correctas.length;i++){
        if (correctas[i]==opcion_elegida[i]){
            cantidad_correctas++
        }

    }

    if(cantidad_correctas==0){
        document.getElementById("conclusion").innerHTML= "no eres apto para cuidar a un perro por ahora, debes aprender más.";
    }
    else if (cantidad_correctas==1 || cantidad_correctas==2){
        document.getElementById("conclusion").innerHTML= "quiza en un futuro puedas cuidar a un perro, debes aprender más.";
    }
    else if (cantidad_correctas==5 || cantidad_correctas==6){
        document.getElementById("conclusion").innerHTML= "Estas capacitado para cuidar a un perro, lo podras hacer bien.";
    }
    else if (cantidad_correctas==7){
        document.getElementById("conclusion").innerHTML= "Estas muy capacitado para cuidar a un perro.";
    }
    else{
        document.getElementById("conclusion").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultado").innerHTML= cantidad_correctas;
    
}