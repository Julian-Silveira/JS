var edad = 10 //Se debe tener una edad igual o mayor que 10 
var altura = 100 //Se debe tener una altura igual o mayor que 52  cm
//console.log(edad, altura)

// La historia: Queremos una aplicación que una vez que mida la altura de un niño, pueda mostrar si el niño es lo suficientemente 
// alto como para subirse a la montaña rusa. Nos encargaron la construcción de la función que mostrará el mensaje correcto al niño.

// Si la altura de la persona es mayor a 52, el console.log debe decir "¡Súbete, chico!". 
// Si no, console.log debe mostrar "Lo siento, chico. Tal vez el próximo año”.


if (altura > 52){
    console.log("¡Súbete, chico!")
} 
else {
    console.log("Lo siento, chico. Tal vez el próximo año")
}

//STRETCH 1 ==== Ajusta la sentencia condicional para requerir tanto la altura como la edad. 

 /*if (altura > 52 && edad >= 10){ 
    console.log("¡Súbete, chico!")
} 
 else {
     console.log("Lo siento, chico. Tal vez el próximo año")
 }

 STRETCH 2 ==== Ajusta la sentencia condicional para exigir que se cumpla el requisito de altura o el requisito de edad. 

if (altura > 52 || edad >= 10){
   console.log("¡Súbete, chico!")
 } 
else {
     console.log("Lo siento, chico. Tal vez el próximo año")
 }*/
