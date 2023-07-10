function congruencial_mixto() {
    var m = parseInt(prompt("Ingrese el valor m para el congruencial mixto"));
    var x = parseInt(prompt("Ingrese el valor x para el congruencial mixto"));
    var a = parseInt(prompt("Ingrese el valor a para el congruencial mixto"));
    var c = parseInt(prompt("Ingrese el valor c para el congruencial mixto"));

    var periodo = 0;
    var xn=0;
    var series = [];

        x = (a * x + c) % m;
        series.push(x/m);
        xn = (a*x + c) % m;
        periodo++;

        while (xn != x) {
            series.push(xn/m);
            xn = (a*xn + c) % m;
            periodo++;
        }

    console.log(series);
    console.log("Periodo", periodo);


    //Prueba de Promedios 
    var sum = series.reduce((previous, current) => current += previous);
    var avg = sum / series.length;
    
    var z = Math.abs(((avg - 0.5) * (Math.sqrt(series.length))) / (Math.sqrt(0.083)));
    
    if (z<1.96) {
        console.log('Los valores ingresados cumplen con la prueba de promedios');
    }else{
        console.log('Los valores ingresados no cumplen con la prueba de promedios');
    }

    //Prueba de Frecuencia
    var num = parseInt(prompt("Ingrese el numero n de divisiones para la prueba de frecuencias"));
    var fe = series.length / num;

    var aux = 0;
    var cont = 0;
    var fo = [];
    
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < series.length; j++) {   
            if (series[j] >= aux && series[j] <= (aux + (1 / num))) {                
                cont++;
            }
        }
        fo.push(cont);
        aux = aux + (1 / num);
        cont = 0;
    }
    var x1=0;
    for (let k = 0; k < fo.length; k++) {
        x1 = x1 + (Math.pow((fe - fo[k]), 2));
    }
    x1 = x1 / fe;

    if (x<9.49) {
        console.log('Los valores ingresados cumplen con la prueba de frecuencias');
    }else{
        console.log('Los valores ingresados no cumplen con la prueba de frecuencias');
    }

    //Prueba de Series
    var num1 = parseInt(prompt("Ingrese el numero n para la prueba de series"));
    var n = series.length;
    var fo = acumular_matriz(series,num1);
    var fe = Math.round(((n-1)/(Math.pow(num1,2))) * 100) / 100;

    var sumj = 0;
    var sumi = 0;
    for (let index = 0; index < num1; index++) {
        sumi = 0;
        for (let j1 = 0; j1 < num1; j1++) {
            sumi = sumi + (Math.pow((fo[index][j1]),2))
        }
        sumj = sumj + sumi;
    }
    x = ((Math.pow(num1,2/(n-1)))*sumj);

    if (x<60) {
        console.log('Los valores ingresados cumplen con la prueba de las series');
    }else{
        console.log('Los valores ingresados no cumplen con la prueba de las series');
    }
}


function acumular_matriz(arreglo, n) {
    var subintervalos = obtener_subintervalos(n);
    var parejas = obtener_parejas(arreglo);    
    var acumulador = [];
    var row = [];
    var aux = 0;

    for (let i = 0; i < n; i++) {
        row = [];
        for (let j = 0; j < n; j++) {
            aux = 0;
            for (let k = 0; k < parejas.length; k++) {
                if ( (k[0] >= subintervalos[j] && k[0] < subintervalos[j+1]) && (k[1] >= subintervalos[i] && k[1] < subintervalos[i+1])) {
                    aux++;
                }
            }
            row.push(aux);
        }
        acumulador.push(row);
    }
    return acumulador;
}


function obtener_parejas(arreglo) {
    var parejas = [];
    var pareja = [];
    for (let i = 0; i < (arreglo.length-1); i++) {
        pareja = [arreglo[i],arreglo[i+1]];
        parejas.push(pareja);
    }
    return parejas;
}

function obtener_subintervalos(num) {
    var aux = 1/num;
    var lista = []

    for (let i = 0; i < num+1; i++) {
        lista.push(Math.round((aux*2) * 100) / 100)        
    }
    return lista
}

