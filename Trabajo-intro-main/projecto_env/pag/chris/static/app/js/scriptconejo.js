let correctasconejos=[1,2,4,2,2]

let opcion_elegidaconejos=[]

let cantidad_correctasconejos=0;

function respuestaconejos(numconejos,seleccionadaconejos){
    opcion_elegidaconejos[numconejos]=seleccionadaconejos.value;
    id="p"+numconejos;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    labels [7]. style. backgroundColor = "#EDF2F7";
    
    seleccionadaconejos.parentNode.style.backgroundColor="#09606aa1"

}
function corregirconejos(){
    cantidad_correctasconejos=0;
    for(o=0; o< correctasconejos.length;o++){
        if (correctasconejos[o]==opcion_elegidaconejos[o]){
            cantidad_correctasconejos++
        }

    }
    if(cantidad_correctasconejos==0){
        document.getElementById("conclusionconejos").innerHTML= "no eres apto para cuidar a un conejo por ahora, debes aprender más.";
    }
    else if (cantidad_correctasconejos==1 || cantidad_correctasconejos==2){
        document.getElementById("conclusionconejos").innerHTML= "quiza en un futuro puedas cuidar a un conejo, debes aprender más.";
    }
    else if (cantidad_correctasconejos==3|| cantidad_correctasconejos==4){
        document.getElementById("conclusionconejos").innerHTML= "Estas capacitado para cuidar a un conejo, lo podras hacer bien.";
    }
    else if (cantidad_correctasconejos==5){
        document.getElementById("conclusionconejos").innerHTML= "Estas muy capacitado para cuidar a un conejo.";
    }
    else{
        document.getElementById("conclusionconejos").innerHTML= "intenta informarte un poco más, en esta pagina te podremos ayudar.";
    }
    document.getElementById("resultadoconejos").innerHTML= cantidad_correctasconejos;
    
}