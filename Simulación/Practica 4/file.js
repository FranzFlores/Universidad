//Numeros generados por el congruencial multiplicativo
var numGenerate = [];

function gcd(a, b) {
    var t;
    while (b != 0) {
        t = a;
        a = b;
        b = t % b;
    }
    return a;
}

//Funcion que comprueba si un numero es relativamente primo o no
function relativelyPrime(a, b) {
    return gcd(a, b) == 1;
}

function generateNumbers() {
    var t = parseInt(prompt("Ingrese el valor de t para el congruencial multiplicativo"));
    var d = parseInt(prompt("Ingrese el valor de d para el congruencial multiplicativo"));
    var sem = parseInt(prompt("Ingrese el valor de la semilla para el congruencial multiplicativo"));

    var a = (8 * t) - 3;
    var m = Math.pow(2, d);
    var lim = m / 4;
    var res = 0;
    var j = 1;
    var msg = ''

    if (sem % 2 != 0) {
        if (relativelyPrime(sem, m)) {
            do {
                res = (a * sem) % m;
                sem = res;
                numGenerate.push(res / m);
                j++;
            } while (j <= lim);
        } else {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            El valor de la semilla no es relativo a m
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>`;
            document.getElementById('message').innerHTML = msg;
        }
    } else {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        El valor de la semilla no es impar
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        document.getElementById('message').innerHTML = msg;
    }
}

function kolmogorov_test() {
    generateNumbers();
    //Ordena los elementos ascedentemente
    numGenerate.sort(function (a, b) { return a - b; });

    //Arreglo de las distribuciones acumuladas
    var distribution = [];
    numGenerate.forEach(element => {
        distribution.push(element / (numGenerate.length));
    });

    //Estadistico Kolmogorov
    var statistical = 0;
    var aux = [];

    for (let i = 0; i < distribution.length; i++) {
        aux[i] = distribution[i] - numGenerate[i];
    }

    statistical = Math.abs(Math.max.apply(null, aux));

    //Para el valor n=8 y alfa=5% d=0.457 
    var d = 0.457;
    var msg = '';
    if (statistical < d) {
        msg += `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    Los valores ingresados cumplen con la prueba de Kolmogorov
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                Los valores ingresados no cumplen con la prueba de Kolmogorov
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    }
}

function poker_test() {
    generateNumbers();

    //Probabilidad de cada valor para el poker
    const all_different = 0.30240 * 100; //todos diferentes
    const pair = 0.50400 * 100; //un par
    const two_pairs = 0.10800 * 100; //dos pares
    const tertiary = 0.07200 * 100; //tercia
    const full = 0.00900 * 100; //full
    const poker = 0.00450 * 100; //poker
    const five_line = 0.00010 * 100; //quintilla

    var all_different1 = 0, pair1 = 0, two_pairs1 = 0, tertiary1 = 0, full1 = 0, poker1 = 0, five_line1 = 0; //todos diferentes
    var cont0 = 0, cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0, cont6 = 0, cont7 = 0, cont8 = 0, cont9 = 0;
    console.log(numGenerate);

    numGenerate.forEach(element => {
        //Considera los 5 numeros del numero generado
        if ((element.toString().length - 2) == 5) {

            for (let i = 2; i < (element.toString().length); i++) {
                switch (element.toString()[i]) {
                    case '0':
                        cont0++;
                        break;
                    case '1':
                        cont1++;
                        break;
                    case '2':
                        cont2++;
                        break;
                    case '3':
                        cont3++;
                        break;
                    case '4':
                        cont4++;
                        break;
                    case '5':
                        cont5++;
                        break;
                    case '6':
                        cont6++;
                        break;
                    case '7':
                        cont7++;
                        break;
                    case '8':
                        cont8++;
                        break;
                    default:
                        cont9++;
                        break;
                }
            }

            if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Todos diferentes');
                all_different1++;
            } else if (cont0 == 2) {
                if (cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                    && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont1 == 2 || cont2 == 2 || cont3 == 2 || cont4 == 2 ||
                    cont5 == 2 || cont6 == 2 || cont7 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont1 == 3 || cont2 == 3 || cont3 == 3 || cont4 == 3 ||
                    cont5 == 3 || cont6 == 3 || cont7 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont1 == 2) {
                if (cont0 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                    && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont2 == 2 || cont3 == 2 || cont4 == 2 ||
                    cont5 == 2 || cont6 == 2 || cont7 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont2 == 3 || cont3 == 3 || cont4 == 3 ||
                    cont5 == 3 || cont6 == 3 || cont7 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont2 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont3 < 2 && cont4 < 2
                    && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont3 == 2 || cont4 == 2 ||
                    cont5 == 2 || cont6 == 2 || cont7 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont3 == 3 || cont4 == 3 ||
                    cont5 == 3 || cont6 == 3 || cont7 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont3 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont4 < 2
                    && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont2 == 2 || cont4 == 2 ||
                    cont5 == 2 || cont6 == 2 || cont7 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont2 == 3 || cont4 == 3 ||
                    cont5 == 3 || cont6 == 3 || cont7 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont4 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2
                    && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont2 == 2 || cont3 == 2 ||
                    cont5 == 2 || cont6 == 2 || cont7 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont2 == 3 || cont3 == 3 ||
                    cont5 == 3 || cont6 == 3 || cont7 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont5 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2
                    && cont4 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont2 == 2 || cont3 == 2 ||
                    cont4 == 2 || cont6 == 2 || cont7 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont2 == 3 || cont3 == 3 ||
                    cont4 == 3 || cont6 == 3 || cont7 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont6 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2
                    && cont4 < 2 && cont5 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont2 == 2 || cont3 == 2 ||
                    cont4 == 2 || cont5 == 2 || cont7 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont2 == 3 || cont3 == 3 ||
                    cont4 == 3 || cont5 == 3 || cont7 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont7 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2
                    && cont4 < 2 && cont5 < 2 && cont6 < 2 && cont8 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont2 == 2 || cont3 == 2 ||
                    cont4 == 2 || cont5 == 2 || cont6 == 2 || cont8 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont2 == 3 || cont3 == 3 ||
                    cont4 == 3 || cont5 == 3 || cont6 == 3 || cont8 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont8 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2
                    && cont4 < 2 && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont9 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont2 == 2 || cont3 == 2 ||
                    cont4 == 2 || cont5 == 2 || cont6 == 2 || cont7 == 2 || cont9 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont2 == 3 || cont3 == 3 ||
                    cont4 == 3 || cont5 == 3 || cont6 == 3 || cont7 == 3 || cont9 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont9 == 2) {
                if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2
                    && cont4 < 2 && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2) {
                    console.log('par');
                    pair1++;
                } else if (cont0 == 0 || cont1 == 2 || cont2 == 2 || cont3 == 2 ||
                    cont4 == 2 || cont5 == 2 || cont6 == 2 || cont7 == 2 || cont8 == 2) {
                    console.log('dos pares');
                    two_pairs1++;
                } else if (cont0 == 3 || cont1 == 3 || cont2 == 3 || cont3 == 3 ||
                    cont4 == 3 || cont5 == 3 || cont6 == 3 || cont7 == 3 || cont8 == 3) {
                    console.log('full');
                    full1++;
                }
            } else if (cont0 == 3 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 == 3 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 == 3 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 == 3 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 == 3
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 == 3 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 == 3 && cont7 < 2 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 == 3 && cont8 < 2 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 == 3 && cont9 < 2) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 < 2 && cont1 < 2 && cont2 < 2 && cont3 < 2 && cont4 < 2
                && cont5 < 2 && cont6 < 2 && cont7 < 2 && cont8 < 2 && cont9 == 3) {
                console.log('Tercia');
                tertiary1++;
            } else if (cont0 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont1 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont2 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont3 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont4 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont5 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont6 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont7 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont8 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont9 == 4) {
                console.log('Poker');
                poker1++;
            } else if (cont0 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont1 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont2 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont3 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont4 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont5 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont6 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont7 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont8 == 5) {
                console.log('Quintilla');
                five_line1++
            } else if (cont9 == 5) {
                console.log('Quintilla');
                five_line1++
            }
            cont0 = 0; cont1 = 0; cont2 = 0; cont3 = 0; cont4 = 0; cont5 = 0; cont6 = 0; cont7 = 0; cont8 = 0; cont9 = 0;
        }

    });

    //Calculo del estadistico X
    var x = (Math.pow((all_different1 - all_different), 2) / all_different) + (Math.pow((pair1 - pair), 2) / pair)
        + (Math.pow((two_pairs1 - two_pairs), 2) / two_pairs) + (Math.pow((tertiary1 - tertiary), 2) / tertiary)
        + (Math.pow((full1 - full), 2) / full) + (Math.pow((poker1 - poker), 2) / poker) + (Math.pow((five_line1 - five_line), 2) / five_line);

    var msg = '';
    if (x<7,81) {
        msg += `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        Los valores ingresados cumplen con la prueba de Poker
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Los valores ingresados no cumplen con la prueba de Poker
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`;
        document.getElementById('message').innerHTML = msg;
    }


}




