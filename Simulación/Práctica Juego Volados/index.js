function congruencial_mixto(m) {

    var x = 23;
    var a = 121;
    var c = 553;

    var periodo = 0;
    var xn = 0;
    var series = [];

    x = (a * x + c) % m;
    series.push(parseFloat(x / m).toFixed(5));
    // xn = (a*x + c) % m;
    // periodo++;

    // while (xn != x) {
    //     series.push(parseFloat(xn/m).toFixed(5));
    //     xn = (a*xn + c) % m;
    //     periodo++;
    // }

    // console.log(series);
    // console.log("Periodo", periodo);
    return series[0];
}

function jugar() {

    const valorInicial = parseInt(prompt("Ingrese el valor inicial"));
    const valorApostar = parseInt(prompt("Ingrese el valor a apostar"));
    const valorObjetivo = parseInt(prompt("Ingrese el valor objetivo"));
    var cantidadInicio = valorInicial;
    var cantidadFin = -1;
    var cantidadApostar = valorApostar;
    var prob = 0;
    var aux = 0;
    var cumplio = "";



    for (let i = 0; i < 10000; i++) {
        //En caso de que se gane o se pierda
        while ((cantidadFin < valorObjetivo && cantidadFin > 0) || cantidadFin < 0) {

            aux = congruencial_mixto(Math.random() * 100) + 1;
            


            if (aux < 0.5) {
                cumplio = "Si";
                if (cantidadFin == -1) {
                    cantidadFin = valorInicial + valorApostar;
                    // cantidadInicio = valorInicial;
                } else {
                    cantidadFin += cantidadApostar;
                    cantidadApostar = valorApostar;
                    // cantidadInicio = cantidadFin;
                }
            } else {
                cumplio = "No";
                if (cantidadFin == -1) {
                    cantidadFin = valorInicial - cantidadApostar;
                    // cantidadInicio = valorInicial;
                } else {
                    cantidadFin -= cantidadApostar;
                    // cantidadInicio = cantidadFin;
                }

                if ((cantidadApostar * 2) < cantidadFin) {
                    cantidadApostar = valorApostar * 2;
                } else {
                    cantidadApostar = cantidadFin;
                }
            }

            // console.log("Corrida:",(i+1),"Valor Antes:",cantidadFin,"Apuesta:",cantidadApostar,"Aleatorio:",aux,"Gano?",cumplio,"Valor Despues:",cantidadFin);
        }

        if (cantidadFin >= valorObjetivo) {
            console.log("Logro el valor objetivo en la corrida", (i + 1));
            prob++;
        } else {
            console.log("No se logro el valor objetivo en la corrida", (i + 1));
        }
        cantidadFin = -1;
        cantidadApostar = valorApostar;

        
        
    }

    console.log('La probalilidad de ganar es de ', (prob/10000) );  
}


// function jugar() {

//     const valorInicial = parseInt(prompt("Ingrese el valor inicial"));
//     const valorApostar = parseInt(prompt("Ingrese el valor a apostar"));
//     const valorObjetivo = parseInt(prompt("Ingrese el valor objetivo"));
//     var cantidadInicio = 0;
//     var cantidadFin = -1;
//     var cantidadApostar = 0;
//     var prob = 0;
//     var aux = 0;
//     var cumplio = "";



//     for (let i = 0; i < 10; i++) {
//         while ((cantidadFin < valorObjetivo && cantidadFin > 0) || cantidadFin < 0) {
//             aux = congruencial_mixto(Math.random() * 100) + 1;
//             if (aux < 0.5) {
//                 cumplio = "Si";
//                 if (cantidadFin == -1) {
//                     cantidadInicio = valorInicial;
//                     cantidadApostar = valorApostar;
//                     cantidadFin = valorInicial + cantidadApostar;
//                 } else {
//                     cantidadInicio = cantidadFin;
//                     cantidadFin += cantidadApostar;
//                     cantidadApostar = valorApostar;
//                 }
//             } else {
//                 cumplio = "No";
//                 if (cantidadFin == -1) {
//                     cantidadInicio = valorInicial;
//                     cantidadApostar = valorApostar;
//                     cantidadFin = valorInicial - cantidadApostar;
//                 } else {
//                     cantidadInicio = cantidadFin;
//                     cantidadFin -= cantidadApostar;
//                     // cantidadInicio = cantidadFin;
//                     if ((cantidadApostar * 2) < cantidadFin) {
//                         cantidadApostar = valorApostar * 2;
//                     } else {
//                         cantidadApostar = cantidadFin;
//                     }
//                 }
//             }

//             console.log("Corrida:",(i+1),"Valor Antes:$",cantidadInicio,"Apuesta:$",cantidadApostar,"Aleatorio:",aux,"Gano?",cumplio,"Valor Despues:$",cantidadFin);
//         }

//         if (cantidadFin >= valorObjetivo) {
//             //console.log("Logro el valor objetivo en la corrida", (i + 1));
//             prob++;
//         } else {
//             //console.log("No se logro el valor objetivo en la corrida", (i + 1));
//         }
//         cantidadFin = -1;
//         cantidadApostar = valorApostar;
//     }
//     console.log('La probalilidad de ganar es de ', (prob/10) );  
// }


