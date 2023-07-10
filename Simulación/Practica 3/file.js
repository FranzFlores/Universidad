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
            document.getElementById('message_generate').innerHTML = msg;
        }
    } else {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        El valor de la semilla no es impar
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
        document.getElementById('message_generate').innerHTML = msg;
    }
}

//Prueba de promedios 
function test_averages_generate(){
    generateNumbers();
    console.log(numGenerate);
    
       
    //Calcular el promedio
    var sum = numGenerate.reduce((previous, current) => current += previous);
    var avg = sum / numGenerate.length;

    var z = Math.abs(((avg - 0.5) * (Math.sqrt(numGenerate.length))) / (Math.sqrt(0.083)));

    var msg = '';

    if (z < 1.96) {
        msg += `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    Los valores ingresados cumplen con la prueba de promedios
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        document.getElementById('message_generate').innerHTML = msg;
    } else {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                Los valores ingresados no cumplen con la prueba de promedios
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
        document.getElementById('message_generate').innerHTML = msg;
    }
}

function frequency_test_generate() {
    generateNumbers();
        //Calcular Frecuencia esperada
        var num = parseInt(prompt("Ingrese el numero n de divisiones para la prueba de frecuencias"));
        var fe = numGenerate.length / num;

        console.log(numGenerate);
        
    
        //Calcular Frecuencia observada
        var aux = 0;
        var cont = 0;
        var fo = [];
        for (let i = 0; i <= num; i++) {
            for (let j = 0; j < numGenerate.length; j++) {
                if (numGenerate[j] >= aux && numGenerate[j] <= (aux + (1 / num))) {
                    cont++;
                }
            }
            fo.push(cont);
            aux = aux + (1 / num);
            cont = 0;
        }
    
        //Construccion de la tabla que indica las FE y FO
        var html = `<table class="table">
        <thead>
          <tr>
            <th scope="col">Nro</th>
            <th scope="col">Frecuencia Esperada</th>
            <th scope="col">Frecuencia Observada</th>
          </tr>
        </thead>
        <tbody>`;
    
        //Formula de prueba de frecuencias
        var x = 0;
        for (let k = 0; k < fo.length; k++) {
            x = x + (Math.pow((fe - fo[k]), 2));
            html += `
            <tr>
                <td>`+ (k + 1) + `</td>
                <td>`+ fe + `</td>
                <td>`+ fo[k] + `</td>
            </tr>`;
        }
        html += " </tbody></table>";
        document.getElementById('table-frequencies_generate').innerHTML = html;
    
        x = x / fe;
    
    
        var msg = "";
        if (x < 9.49) {
            msg += `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    Los valores ingresados cumplen con la prueba de frecuencias
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`;
            document.getElementById('message_generate').innerHTML = msg;
        } else {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Los valores ingresados no cumplen con la prueba de frecuencias
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>`;
            document.getElementById('message_generate').innerHTML = msg;
        }
}



//Numeros Dados en el archivo Excel
var numArray = [0.64138, 0.55837, 0.81593, 0.04994, 0.61265, 0.06787, 0.30465, 0.54264, 0.81159,
    0.61163, 0.47681, 0.52127, 0.69239, 0.92006, 0.37913, 0.32035, 0.37248, 0.57836, 0.19180, 0.28920,
    0.79302, 0.08124, 0.53401, 0.48201, 0.03268, 0.38087, 0.68054, 0.69251, 0.60284, 0.69351];

//Prueba de Promedios
function test_averages() {

      
    //Calcular el promedio
    var sum = numArray.reduce((previous, current) => current += previous);
    var avg = sum / numArray.length;

    var z = Math.abs(((avg - 0.5) * (Math.sqrt(numArray.length))) / (Math.sqrt(0.083)));

    var msg = '';

    if (z < 1.96) {
        msg += `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    Los valores ingresados cumplen con la prueba de promedios
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                Los valores ingresados no cumplen con la prueba de promedios
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    }
}


function frequency_test() {
    //Calcular Frecuencia esperada
    var num = parseInt(prompt("Ingrese el numero n de divisiones para la prueba de frecuencias"));
    var fe = numArray.length / num;
    console.log(numGenerate);

    //Calcular Frecuencia observada
    var aux = 0;
    var cont = 0;
    var fo = [];
    
    for (let i = 0; i <= num; i++) {

        for (let j = 0; j < numArray.length; j++) {   
            if (numArray[j] >= aux && numArray[j] <= (aux + (1 / num))) {                
                cont++;
            }
        }
        
        fo.push(cont);
        aux = aux + (1 / num);
        cont = 0;
    }

    //Construccion de la tabla que indica las FE y FO
    var html = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Nro</th>
        <th scope="col">Frecuencia Esperada</th>
        <th scope="col">Frecuencia Observada</th>
      </tr>
    </thead>
    <tbody>`;

    //Formula de prueba de frecuencias
    var x = 0;
    
    
    for (let k = 0; k < fo.length; k++) {
        x = x + (Math.pow((fe - fo[k]), 2));
        html += `
        <tr>
            <td>`+ (k + 1) + `</td>
            <td>`+ fe + `</td>
            <td>`+ fo[k] + `</td>
        </tr>`;
    }
    html += " </tbody></table>";
    document.getElementById('table-frequencies').innerHTML = html;

    x = x / fe;
    console.log(x);
    

    var msg = "";
    if (x < 9.49) {
        msg += `<div class="alert alert-success alert-dismissible fade show" role="alert">
                Los valores ingresados cumplen con la prueba de frecuencias
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                Los valores ingresados no cumplen con la prueba de frecuencias
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    }
}

//Prueba de Serie
function serie_test() {

    var serieArray = new Array(2);
    serieArray[0] = new Array(5);
    serieArray[1] = new Array(5);
    var x=0;
    var y=0;


    for (let i = 0; i < (numArray.length-1); i++) {
        x=0;
        y=0;
        if (numArray[i]<=0.2) {
            x=4;
        }
        if (numArray[i]<=0.4 && numArray[i]>0.2 ) {
            x=3;
        }
        if (numArray[i]<=0.6 && numArray[i]>0.4) {
            x =2;
        }
        if (numArray[i]<=0.8 && numArray[i]>0.6) {
            x = 1;
        }
        if (numArray[i]<=1&& numArray[i]>0.8) {
            x=0;
        }
        if (numArray[i+1]<=0.2) {
            y=0;
        }
        if (numArray[i+1]<=0.4 && numArray[i]>0.2 ) {
            y=1;
        }
        if (numArray[i+1]<=0.6 && numArray[i]>0.4) {
            y =2;
        }
        if (numArray[i+1]<=0.8 && numArray[i]>0.6) {
            y = 3;
        }
        if (numArray[i+1]<=1&& numArray[i]>0.8) {
            y=4;
        }
            serieArray.push((x+1),(y+1));
            console.log(serieArray);
            


    }

   






}





