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

    var autos_disponibles = 7; //Numero de Autos Disponibles 
    var autos_solicitados = 0; //Numero de Autos Solicitados 
    var autos_alquilados = 0; //Numero de Autos Alquilados
    var autos_ocupados = 0; //Numero de Autos No Disponibles porque estan alquilados
    var dias_autos = [];
    var dias_alquilados = [];
    var autos_alquilados = 0;
    var dias_alquilado = 0;

    var ganancia = 0;
    var auto_no_disponible = 0;
    var auto_ocioso = 0;
    var ganancia_neta = 0;

    var dias = 0;
    var tam_dias = 0;

    var dias_agregados = 0;


    var html = "";

    //Determinar el numero de autos alquilados para cada dia
    for (let i = 0; i < 20; i++) {

        autos_solicitados = autos_renta();

        if (autos_solicitados == 0) {
            ganancia = 0;
            auto_no_disponible = 0;
            auto_ocioso = 70;
            ganancia_neta = ganancia - auto_no_disponible - auto_ocioso + ganancia_neta;
        }


        dias = dias_renta(autos_solicitados);

        for (let j = 0; j < dias.length; j++) {
            ganancia += 50 * dias[j];
            if (dias[j] > 1) {
                dias_autos.push(dias[j]); //Agrega al arreglo los dias mayores a 1
            }
        }

        if (i == 0) {
            tam_dias = dias_autos.length;
        } else {
            for (let k = 0; k < tam_dias; k++) {
                if (dias_autos[k] > 0) {
                    dias_autos[k] = dias_autos[k] - 1;
                    if (dias_autos[k] > 0) {
                        autos_ocupados++;
                    }
                }
            }
            console.log(tam_dias);

            // for (let j = 0; j < dias_autos.length; j++) {
            //     if (dias_autos[j] > 0) {
            //         autos_ocupados++;
            //        // dias_alquilados.push(dias);
            //     }
            // }
            tam_dias = dias_autos.length;
        }

        autos_disponibles = 7 - (autos_solicitados + autos_ocupados);
        autos_alquilados = autos_solicitados + autos_ocupados;


        if (autos_alquilados > 7) {
            auto_no_disponible = (autos_alquilados - 7) * 30;
            auto_ocioso = 0;
        } else {
            auto_ocioso = (7 - autos_alquilados) * 10;
            auto_no_disponible = 0;
        }

        ganancia_neta = ganancia - auto_no_disponible - auto_ocioso + ganancia_neta;


        html += `<tr>
                    <td>`+ (i + 1) + `</td>
                    <td>`+ autos_solicitados + `</td>
                    <td> `+ dias + `</td>
                    <td>`+ autos_ocupados + `</td>
                    <td>`+ autos_alquilados + `</td>
                    <td>`+ autos_disponibles + `</td>
                    <td>$`+ ganancia + `.00</td>
                    <td>$`+ auto_no_disponible + `.00</td>
                    <td>$`+ auto_ocioso + `.00</td>
                    <td>$`+ ganancia_neta + `.00</td>
                </tr>`;


        autos_ocupados = 0;
        ganancia = 0;
        auto_no_disponible = 0;
        auto_ocioso = 0;
        dias_alquilados = [];
    }

    $('table tbody').html(html);
}

function autos_renta() {
    var aleatorio = 0;
    var autos_alquilados = -1;

    var aleatorio = congruencial_mixto(Math.random() * 100) + 1;
    if (aleatorio <= 0.10) autos_alquilados = 0;
    else if (aleatorio > 0.10 && aleatorio <= 0.20) autos_alquilados = 1;
    else if (aleatorio > 0.20 && aleatorio <= 0.45) autos_alquilados = 2;
    else if (aleatorio > 0.45 && aleatorio <= 0.75) autos_alquilados = 3;
    else if (aleatorio > 0.75 && aleatorio <= 1) autos_alquilados = 4;

    return autos_alquilados;
}

function dias_renta(val) {
    var aleatorio = 0;
    var dias = 0;
    var num = [];
    for (let i = 0; i < val; i++) {
        aleatorio = congruencial_mixto(Math.random() * 100) + 1;
        if (aleatorio <= 0.40) dias = 1;
        else if (aleatorio > 0.40 && aleatorio <= 0.75) dias = 2;
        else if (aleatorio > 0.75 && aleatorio <= 0.90) dias = 3;
        else if (aleatorio > 0.90 && aleatorio <= 1) dias = 4;
        num.push(dias);
    }
    return num;
}


