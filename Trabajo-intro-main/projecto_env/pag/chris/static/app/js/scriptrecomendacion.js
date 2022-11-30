let opcion_elegida=[]

let cantidad_correctas=0;

function respuesta(num_pregunta,seleccionada){
    opcion_elegida[num_pregunta]=seleccionada.value;
    id="p"+num_pregunta;
    
    labels = document.getElementById(id).childNodes;

    labels [3]. style. backgroundColor = "#EDF2F7";
    labels [5]. style. backgroundColor = "#EDF2F7";
    seleccionada.parentNode.style.backgroundColor="#09606aa1"

}
function corregir(){
    
    if( opcion_elegida[0]==1 && opcion_elegida[1]==1 && opcion_elegida[2]==1 && opcion_elegida[3]==1 && opcion_elegida[4]==2 && opcion_elegida[9]==2){
        document.getElementById("conclusion").innerHTML= "Recomendacion: Un perro es la mascota perfecta para ti, son juguetones, pueden llegar a ser muy escandalosos y lo más importante es que también son cariñosos.";
    }
    else if( opcion_elegida[0]==1 && opcion_elegida[1]==1 && opcion_elegida[2]==2 && opcion_elegida[3]==2 && opcion_elegida[4]==2 && opcion_elegida[9]==2){
        document.getElementById("conclusion").innerHTML="Recomendacion: Un perro calzaria contigo."
    }
  
    else if(opcion_elegida[0]==1 && opcion_elegida[1]==1 && opcion_elegida[2]==1 && opcion_elegida[3]==2 && opcion_elegida[4]==2 && opcion_elegida[9]==2){
        document.getElementById("conclusion").innerHTML= "Recomendacion: Un perro pequeño es la mascota perfecta para ti, puede vivir dentro de tu hogar, son juguetones, pueden llegar a ser muy escandalosos y lo más importante es que también son cariñosos.";
    }
    else if(opcion_elegida[1]==1 && opcion_elegida[8]==2 && opcion_elegida[9]==2 ) {
        document.getElementById("conclusion").innerHTML="Recomendacion: Una hurón calzaria contigo."
    }
    else if(opcion_elegida[0]==1 && opcion_elegida[4]==1 && opcion_elegida[5]==2 ) {
        document.getElementById("conclusion").innerHTML= "Recomendacion: Una tortuga de tierra es la mascota perfecta, ellos son tranquilos, por su lentitud debes tener paciencia también debes saber que estos no demuestran su cariño tanto como otros animales.";
    }
    else if(  opcion_elegida[5]==1 && opcion_elegida[8]==2 && opcion_elegida[9]==2  || opcion_elegida[7]==1 && opcion_elegida[8]== 2 ) {
        document.getElementById("conclusion").innerHTML= "Recomendacion: Un conejo no es una mascota que mucha gente tenga, pero son muy tiernos además de ser muy buenos amigos de los niños.";
    }
    else if(  opcion_elegida[5]==1 && opcion_elegida[6]==1 && opcion_elegida[9]==2) {
        document.getElementById("conclusion").innerHTML= "Recomendacion: Un gato es exactamente lo que necesitas en tu vida, pueden llegar a ser muy cariñosos, pero esto cambia en cada gato, cada uno es un mundo distinto, él será tu compañero para las siestas.";
    }
    else if( opcion_elegida[0]==1 ){
        document.getElementById("conclusion").innerHTML="Recomendacion: Un loro calzaria contigo."
    }
    else if(  opcion_elegida[9]==2 ) {
        document.getElementById("conclusion").innerHTML= "Recomendacion: Un gato es exactamente lo que necesitas en tu vida, pueden llegar a ser muy cariñosos, pero esto cambia en cada gato, cada uno es un mundo distinto, él será tu compañero para las siestas.";
    }
   
}

