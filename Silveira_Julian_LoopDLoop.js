// Un preparador físico e ingeniero mecánico local está construyendo un dispositivo IoT que hace saltar
// un caramelo cada vez que un corredor llega a 3 kilómetros en una trotadora, pero deja de dar caramelos en el kilómetro 10. 
// Tenemos la tarea de crear la funcionalidad de bucle para saber cuándo dar un caramelo y cuando parar.


// ¿Cómo sabemos que necesitamos un bucle aquí? - Porque hay que darle caramelos mas de una vez (1 caramelo cada 3km)
// ¿Cuál es el punto de partida del bucle? - 0 
// ¿Cuándo debe detenerse el bucle? - cuando se llegue a 10 km
// ¿Cómo sabrá parar? - Porque deja de dar caramelos
// ¿Cuál es el incremento para cada iteración del bucle? - 1 en la variable km
// ¿Qué variables necesitamos? - km

var km = 0

while(km<10){
    km++;
    console.log(km)
    if(km==3){
        console.log("Ganaste un Caramelo")
    }else if(km==6){
        console.log("Ganaste un Carameo")
    }else{ 
        console.log("No quedan mas caramelos")
    }
}

//Paso 2: construye el bucle.
//Paso 3: guarda y envía.