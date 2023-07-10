function congruencial_mixto(m) {

    var x = 23;
    var a = 121;
    var c = 553;

    var periodo = 0;
    var xn = 0;
    var series = [];

    x = (a * x + c) % m;
    series.push(parseFloat(x / m).toFixed(5));
    return series[0];
}

function probar() {

    var peso = 0; //Peso acumulado
    var aux = 0; //Variable que contiene el valor aleatorio 
    var excedio = 0; //Si el peso supera a 1000
    var noExcedio = 0; //El peso no supera a 1000
    var excedidos = 0;

    for (let k = 0; k < 30; k++) {
        for (let j = 0; j < 260; j++) {
            for (let i = 0; i < 5; i++) {
                aux = congruencial_mixto(Math.random() * 100) + 1;

                if (aux < 0.5) { //Si el numero generado es menor a 0.5
                    peso += 190 + Math.sqrt((800 * aux));
                } else {
                    peso += 230 - Math.sqrt((1 - aux) * 800);
                }
            }

            if (peso <= 1000) {
                noExcedio++;
            } else {
                excedio++;
            }
            peso = 0;
        }

        //Calculos para el año
        excedidos = excedio * 200;
        if (excedidos <= 60000) {
            console.log('Conviene usar los servicios de otra compañia en el año ', (k + 1), '.Valor ', excedidos);
        } else {
            console.log('Conviene hacer la compra de un camion nuevo en el año ', (k + 1), 'Valor ', excedidos);
        }

        excedidos = 0;
        noExcedio = 0;
        excedio = 0;
    }

    // var peso = 0;
    // var pesoAcumulado = 0;
    // var aux = 0;
    // var excedio = "No";


    // for (let j = 0; j < 10; j++) {
    //     for (let i = 0; i < 5; i++) {
    //         aux = congruencial_mixto(Math.random() * 100) + 1;

    //         if (aux < 0.5) { //Si el numero generado es menor a 0.5
    //             peso = 190 + Math.sqrt((800 * aux));
    //         } else {
    //             peso = 230 - Math.sqrt((1 - aux) * 800);
    //         }
    //         pesoAcumulado += peso;
    //         if (pesoAcumulado > 1000) {
    //             excedio = "Si"
    //         }

    //         console.log("Corrida:", (j + 1), "Tina", (i + 1), "Aleatorio:", aux, "Peso Simulado", peso, "Peso Acumulado", pesoAcumulado, "Excedio", excedio);
    //     }
    //     pesoAcumulado =0;
    //     excedio = "No";


    

}