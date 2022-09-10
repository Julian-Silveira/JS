// Utilizando lo que has aprendido sobre funciones y parámetros, crea una función que, dado un nombre, diga "buenos días" 
// a esa persona por su nombre.

// Por ejemplo, la llamada de función greet("Anakin") registraría en la consola, ¡Buen día, Anakin!

// Nivel 2: Personaliza aún más tu función incluyendo la hora del día en tu saludo. Pista: ¿las funciones solo pueden tomar un parámetro?

// Nivel 3: Tú y el Conde Dooku tienen problemas. Personaliza aún más tu código para que diga "¡Voy por ti, Dooku!" 
// si tu función se llama con "Count Dooku".


var nombre = "Julian"
function greet(nombre){
    var greeting = "Buen dia, " + nombre
    console.log(greeting)
}
greet(nombre)

// Nivel 2: Personaliza aún más tu función incluyendo la hora del día en tu saludo. Pista: ¿las funciones solo pueden tomar un parámetro?

var hora = 19
function greetWithTtime(nombre,hora){
    var greeting = "Buen dia, " + nombre
    console.log(greeting,hora)
}
greetWithTtime(nombre,hora)

// Nivel 3: Tú y el Conde Dooku tienen problemas. Personaliza aún más tu código para que diga "¡Voy por ti, Dooku!" 
// si tu función se llama con "Count Dooku".
function greetCountDooku(nombre){
    if(nombre == "Count Dooku"){
        console.log("¡Voy por ti, Dooku!")
    }else{
        var greeting = "Buen dia, " + nombre
        console.log(greeting)
    }
}
greetCountDooku("Count Dooku")
greetCountDooku("Julian")