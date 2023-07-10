//Promedio 
function averageValue(array) {
    var average = 0;
    array.forEach(element => {
        average += element;
    });
    average /= array.length;
    return average;
}

//Varianza
function varianceValue(array, average) {
    var variance = 0;
    array.forEach(element => {
        variance += (Math.pow((element - average), 2)) / (array.length - 1);
    });
    variance = Math.sqrt(variance);
    return variance;
}

//Factorial
function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}

//Probabilida de Poisson
// function Poisson_probability(lamda, x) {
//     var p = ((Math.pow(lamda, x)) * (Math.exp(-lamda))) / factorial(x);
//     return p;
// }


function distribution() {
    var array = [16.032, 24.076, 18.825, 19.364, 17.532, 16.713, 12.858, 16.452, 28.501, 16.939, 16.463, 21.151,
        14.817, 18.515, 14.240, 24.154, 16.677, 18.739, 14.206, 17.487, 22.658, 22.240, 17.926, 24.477,
        17.673, 14.702, 27.014, 19.916, 16.238, 19.501, 18.590, 17.471, 16.537, 22.422, 13.373, 12.165,
        16.597, 20.795, 25.924, 18.587, 19.929, 23.960, 14.417, 21.971, 20.549, 21.404, 18.874, 25.354,
        18.338, 24.509];

            
    var intervals = [[12, 14], [14.01, 16], [16.01, 18], [18.01, 20], [20.01, 22], [22.01, 24], [24.01, 26],[26.01,29]];
        
    var average = averageValue(array);
    console.log("El valor del promedio es ", average);
    var variance = varianceValue(array, average);
    console.log("El valor de la varianza es ", variance);

    var betha = (Math.PI) / (Math.sqrt(variance) * Math.sqrt(6));
    console.log("El valor de Beta es ", betha);
    var alpha = Math.exp(average + (0.5772 / betha));
    console.log("El valor de Alpha es ", alpha);

    //Arreglo con la frecuencia observada de cada intervalo
    var fo = [];
    var cont = 0;
    
    for (let j = 0; j < intervals.length; j++) {
        for (let k = 0; k < intervals[j].length-1; k++) {           
            array.forEach(element => {
                if (element >= intervals[j][k] && element <= intervals[j][k+1]) {
                    cont++;
                }
            });
        }
        fo.push(cont);
        cont = 0;
    }
    console.log("Arreglo de frecuencia observada " , fo);
    

    var po = [];
    fo.forEach(element => {
        po.push(element/array.length);
    });
    console.log('Arreglo de la probabilidad observada',po);
    
    var poa = [];
    var cont1 = po[0];
    poa.push(po[0]);
    for (let index = 1; index < po.length; index++) {        
        cont1 = cont1 + po[index];
        poa.push(cont1);
    }
    console.log('Arreglo de la probabilidad observada acumulada',poa);

    var pe = [];
    for (let j = 0; j < intervals.length; j++) {
        pe.push(1-Math.exp(-Math.pow((intervals[j][1]/betha),alpha)));
        console.log(Math.pow((intervals[j][1]/betha),alpha));
        
    }
    console.log("Arreglo de probabilidad esperada",pe);

    
    
}

