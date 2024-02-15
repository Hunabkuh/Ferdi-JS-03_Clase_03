// 1 - BECA ESTUDIANTE

// Para conseguir una beca en Hack - Iron el estudiante debe cumplir las siguientes condiciones:

// 1 - Que sea mayor o igual 18 y resida en Barcelona

// 2 - O bien, que sea mayor de 30 años y tenga familia numerosa

// 3 - O bien, Que tenga entre 12 y 18 años y sea un geni @de la programación

// Recuerda que puedes usar los métodos toLowerCase() o toUpperCase() para facilitar la comparación de strings.

let edad = parseInt(prompt("Bienvenido al proceso de selección de becarios de Hack-Iron, por favor ingrese su edad: "));

if (edad >= 12 && edad < 18) {
    let genioProg = prompt("¿Te consideraría como un 'Genio de la programación'?, Escriba una 'S' en caso afirmativo o una 'N' en caso negativo: ");
    if (genioProg == 'S') {
        document.write("¡Felicidades!, se te ha aprobado una beca para estudiar en Hack-Iron.");
    } else {
        document.write("Lo sentimos, sólo los que se consideran genios pueden optar a una beca... ¡Vuélvete un genio!");
    }

} else if (edad >= 18 && edad < 30) {
    let ciudad = prompt("¿Vives en la ciudad de Barcelona?, Escriba una 'S' en caso afirmativo o una 'N' en caso negativo: ");
    if (ciudad == 'S') {
        document.write("¡Felicidades!, se te ha aprobado una beca para estudiar en Hack-Iron.");
    } else {
        document.write("Lo sentimos, sólo aceptamos estudiantes provenientes de Barcelona ciudad.");
    }

} else if (edad > 30) {
    let familia = prompt("¿Posee usted la condición de Familia numerosa?, Escriba una 'S' en caso afirmativo o una 'N' en caso negativo: ");
    if (familia == 'S') {
        document.write("¡Felicidades!, se te ha aprobado una beca para estudiar en Hack-Iron.");
    } else {
        document.write("Lo sentimos, solo estudiantes en condición de Familia numerosa pueden optar a las becas.");
    }
} else {
    document.write("Lo sentimos, no cumples ninguna de las condiciones para optar a una beca.");
}
