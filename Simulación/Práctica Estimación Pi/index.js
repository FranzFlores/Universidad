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

function empezar() {

    var aleatorio1 = 0;
    var aleatorio2 = 0;
    var valor = 0;
    var acumulado = 0;

    for (var i = 0; i < 1000; i++) {
      aleatorio1 = congruencial_mixto(Math.random() * 100) + 1;
      aleatorio2 = congruencial_mixto(Math.random() * 100) + 1;

      valor = Math.sqrt(Math.pow(aleatorio1,2) + Math.pow(aleatorio2,2));
      if (valor <= 1) {
        acumulado ++;
      }
      console.log('Corrida:',(i+1), 'Aleatorio 1:',aleatorio1,'Aleatorio 2:',aleatorio2, 'Valor:',valor,'Acumulado:',acumulado);
    }

    console.log('El valor Aproximado de Pi es ', ((acumulado*4)/1000)  );
}
