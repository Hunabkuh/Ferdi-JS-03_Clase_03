// 2 - COCHE NO ARRANCA

// Solucionar mediante condicionales el siguiente algoritmo:


// Oh! Estás aparcado en la calle, pero el coche no arranca...

// Si vives cerca AND tienes ganas de caminar, te vas andando y ya lo arreglarás mañana.Si no, realiza las siguientes comprobaciones:
//     - Tiene gasolina ?
//                         * No => hay que poner gasolina
//     - Tienes dinero ?
//                                  • Si => poner gasolina
//                                  • No => vas en metro
//     * Sí que tiene gasolina:


// - Tiene batería ?
//                                                * No => recargar batería
//     * Sí => pásate por el mecánico

// Submission

alert("Se ha estropeado tu coche, responde las preguntas a continuación.");

let distancia = prompt("¿Vives cerca?, responde con una 'S' en caso afirmativo, o con una 'N' en caso negativo: ");

let ganasCaminar = prompt("¿Tienes ganas de caminar?, responde con una 'S' en caso afirmativo, o con una 'N' en caso negativo: ");

if (distancia == 'S' && ganasCaminar == 'S') {
    document.write("En ese caso no te preocupes, puedes regresar mañana y arreglarlo.");
} else if (distancia == 'N' && ganasCaminar == 'S') {
    document.write("En ese caso no te preocupes, puedes regresar mañana y arreglarlo.");
} else {
    let gasolina = prompt("¿El coche tiene gasolina?, responde con una 'S' en caso afirmativo, o con una 'N' en caso negativo: ");
    if (gasolina == 'N') {
        document.write("Hay que ir a repostar");
    } else {
        let bateria = prompt("¿Tiene carga suficiente la batería?, responde con una 'S' en caso afirmativo, o con una 'N' en caso negativo: ");
        if (bateria == 'S') {
            document.write("Debes ir donde tu mecánico.");
        } else {
            document.write("Debes recargar la batería");
        }
    }

}
