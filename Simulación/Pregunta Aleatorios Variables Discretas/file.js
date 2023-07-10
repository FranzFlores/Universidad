function roundNumber(number, decimals) {
    var floatNumber = parseFloat(number);
    var result = Math.round(floatNumber * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return result;
}

function getArrayMixedCongruence() {
    var m = parseInt(prompt("Ingrese el valor m para el congruencial mixto"));
    var x = parseInt(prompt("Ingrese el valor x para el congruencial mixto"));
    var a = parseInt(prompt("Ingrese el valor a para el congruencial mixto"));
    var c = parseInt(prompt("Ingrese el valor c para el congruencial mixto"));

    var xn = 0;
    var series = [];

    x = (a * x + c) % m;
    series.push(x / m);
    xn = (a * x + c) % m;


    while (xn != x) {
        series.push(xn / m);
        xn = (a * xn + c) % m;
    }

   // console.log(series);
    return series;

}

function getCouples(array) {
    var couples = [];
    var couple = [];
    for (let i = 0; i < (array.length - 1); i++) {
        if (i > 0) {
            couple = [(array[i] + 0.0001), array[i + 1]];
            couples.push(couple);
        } else {
            couple = [array[i], array[i + 1]];
            couples.push(couple);
        }
    }
    return couples;
}



function distribution() {
    var sum = 0;
    var aux = 0;
    var intervals = [];
    
    for (let i = 1; i <= 35; i++) {
        aux = (1 / 5) * (Math.pow(4 / 5, i - 1));
        aux = roundNumber(aux, 4);
        sum += (1 / 5) * (Math.pow(4 / 5, i - 1));
        sum = roundNumber(sum, 4);
        intervals.push(sum);
    }
    intervals = getCouples(intervals);
    intervals[intervals.length-1][1]=0.9999;

    for (let i = 0; i < intervals.length; i++) {
        console.log("En el intervalo [",intervals[i][0],",",intervals[i][1],"] el valor es x=",i+1);
    }

    var random = getArrayMixedCongruence();
    var randomNumbers = [];
    
    for (let i = 0; i < intervals.length; i++) {
        random.forEach(element => {
            if (element>=intervals[i][0] && element<=intervals[i][1]) {
                element = i+1;
                randomNumbers.push(element);
            }
        });
    }
    console.log("El arreglo de numeros pseudoaleatorios con el congruencial mixto es ");
    console.log(random);
    console.log("El arreglo de numeros aleatorios con el metodo de transformacion inversa es ");
    console.log(randomNumbers);
}

function literalb() {
    var sum = 0;
    var aux = 0;
    var intervals = [];
    
    for (let i = 1; i <= 12; i++) {
        aux = (1 / 2) * (Math.pow(1 / 2, i - 1));
        aux = roundNumber(aux, 4);
        sum += (1 / 2) * (Math.pow(1 / 2, i - 1));
        sum = roundNumber(sum, 4);
        intervals.push(sum);
    }
    intervals = getCouples(intervals);
    intervals[intervals.length-1][1]=0.9999;

    for (let i = 0; i < intervals.length; i++) {
        console.log("En el intervalo [",intervals[i][0],",",intervals[i][1],"] el valor es x=",i+1);
    }

    var random = getArrayMixedCongruence();
    var randomNumbers = [];
    
    for (let i = 0; i < intervals.length; i++) {
        random.forEach(element => {        
            if (element>=intervals[i][0] && element<=intervals[i][1]) {
                element = i+1;
                randomNumbers.push(element);
            }
        });
    }
    console.log("El arreglo de numeros pseudoaleatorios con el congruencial mixto es ");
    console.log(random);
    console.log("El arreglo de numeros aleatorios con el metodo de transformacion inversa es ");
    console.log(randomNumbers);
}

function literalc() {

    console.log("El valor de p para la funcion es ",0.40);
    var p = 0.40;

    var sum = 0;
    var aux = 0;
    var intervals = [];
    
    for (let i = 1; i <= 9; i++) {
        aux = p * (Math.pow((1-p), i - 1));
        aux = roundNumber(aux, 4);
        sum += p * (Math.pow((1-p), i - 1));
        sum = roundNumber(sum, 4);
        intervals.push(sum);
    }

    intervals = getCouples(intervals);
    intervals[intervals.length-1][1]=0.9999;

    for (let i = 0; i < intervals.length; i++) {
        console.log("En el intervalo [",intervals[i][0],",",intervals[i][1],"] el valor es x=",i+1);
    }

    var random = getArrayMixedCongruence();
    var randomNumbers = [];
    
    for (let i = 0; i < intervals.length; i++) {
        random.forEach(element => {        
            if (element>=intervals[i][0] && element<=intervals[i][1]) {
                element = i+1;
                randomNumbers.push(element);
            }
        });
    }
    console.log("El arreglo de numeros pseudoaleatorios con el congruencial mixto es ");
    console.log(random);
    console.log("El arreglo de numeros aleatorios con el metodo de transformacion inversa es ");
    console.log(randomNumbers);
}

