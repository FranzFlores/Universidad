'use strict'

//Método que devuelve un arreglo con todos los divisores del numero ingresado
function get_dividers(number) {
    var dividers = [1, parseInt(number)];
    if (number > 1) {
        var cont = 2;
        var limit = number;
        while (cont < limit) {
            if (number % cont == 0) {
                dividers.push(cont);
                if (cont != (number / cont)) {
                    dividers.push(number / cont);
                }
                limit = number / cont;
            }
            cont++;
        }
    }
    return dividers;
}

function is_relative_prime(x, m) {
    var x_dividers = get_dividers(x).sort();
    var m_dividers = get_dividers(m).sort();
    var aux = [];
    x_dividers.every(function (value, index) {
        if (value == m_dividers[index]) {
            aux.push(value);
        }
    });

    if (aux.length > 1) {
        return true;
    } else {
        return false;
    }
}

function check_x(x, m) {
    var msg = '';
   
    if (x % 2 == 0) {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    El valor de X<sub>n</sub> no debe ser par
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    } else if (is_relative_prime(x, m)) {        
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    El valor de X<sub>n</sub> no es relativo al valor generado en M
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {        
        return true;
    }
}



function generate_numbers() {

    var x = parseInt(document.getElementById('Value_X').value);
    var t = parseInt(document.getElementById('Value_T').value);
    var d = parseInt(document.getElementById('Value_D').value);

    var a = (8 * t) - 3;
    var m = Math.pow(2, d);
    var p = m / 4;
    console.log(p);
    
    

    var s = x,
        xn = s;

    var aleatory = [];

    if (check_x(x,m)) {  
        while (!aleatory.includes(s)) {
            var res = ((a * xn)) % m;
            var aux = (a * xn) - res;
            aux = aux /m;
            xn = res;
            aleatory.push(xn);
        }
    }
    createTable(aleatory);
}

function createTable(aleatory) {
    var html=`<table class="table mt-2 text-center">
    <thead>
        <tr>
            <th scope="col">n</th>
            <th scope="col">X <sub>n</sub></th>
        </tr>
    </thead>
    <tbody>`;
    for (let index = 0; index < aleatory.length; index++) {
       html += `<tr><td>`+(index+1)+`</td><td>`+aleatory[index]+`</td></tr>`
    }
    html += `</tbody></table>`;
    document.getElementById('result').innerHTML = html;
}