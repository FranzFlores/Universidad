'use strict'
var xn;

function is_impar(value, word) {
    var msg = '';
    if (value % 2 == 0) {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    El valor ingresado en `+ word + ` no debe ser par.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {
        return true;
    }
}

function is_greater_than_zero(value, word) {
    var msg = '';
    if (value <= 0) {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    El valor ingresado en `+ word + ` debe ser mayor a cero.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {
        return true;
    }
}

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

function is_relative_prime(c, m) {
    var c_dividers = get_dividers(c).sort();
    var m_dividers = get_dividers(m).sort();
    var aux = [];
    var msg = '';
    c_dividers.every(function (value, index) {
        if (value == m_dividers[index]) {
            aux.push(value);
        }
    });
    if (aux.length != 1) {
        msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                El valor ingresado en C debe ser relativamente primo al valor ingresado en M.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>`;
        document.getElementById('message').innerHTML = msg;
    } else {
        return true;
    }
}

function is_prime(m) {
    for (let i = 2; i < m; i++) {
        if (m % i === 0) {
            return true;
        }
    }
  
}

function check_a(a, m) {
    var msg = '';
    if (is_impar(a, "A") && is_greater_than_zero(a, "A")) {
        if (a % 3 == 0) {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    El valor ingresado en A no debe ser múltiplo de 3.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
            document.getElementById('message').innerHTML = msg;
        } else if (a % 5 == 0) {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    El valor ingresado en A no debe ser múltiplo de 5.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
            document.getElementById('message').innerHTML = msg;
        } else if (m % 4 == 0 && (a - 1) % 4 == 0) {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    El valor ingresado en A no puede generar un ciclo o periodo completo
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>`;
            document.getElementById('message').innerHTML = msg;
        } else {
            return true;
        }
    }
}

function check_c(c, m) {
    if (is_impar(c, "C") && is_greater_than_zero(c, "C") && is_relative_prime(c, m)) {
        return true;
    }
}

function check_x(x) {
    if (is_greater_than_zero(x, " X<sub>n</sub>")) {
        return true;
    }
}

function check_m(m, x, a, c) {
    var msg = '';
    if (is_greater_than_zero(m, " M ")) {
        
        
        if (m < x) {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        El valor de M debe ser mayor al valor de X<sub>n</sub>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            document.getElementById('message').innerHTML = msg;
        } else if (m < a) {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        El valor de M debe ser mayor al valor de A
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            document.getElementById('message').innerHTML = msg;
        } else if (m < c) {
            msg += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                        El valor de M debe ser mayor al valor de C
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            document.getElementById('message').innerHTML = msg;
        } else {
            return true;
        }
    }
}

function generate_numbers() {

    var m = parseInt(document.getElementById('Value_M').value);
    var x = parseInt(document.getElementById('Value_X').value);
    var a = parseInt(document.getElementById('Value_A').value);
    var c = parseInt(document.getElementById('Value_C').value);

    if (check_a(a) && check_c(c) && check_x(x) && check_m(m, x, a, c)) {
        x = (a * x + c) % m;
        xn = (a * x + c) % m;

        var html = '<ul class="list-group" style="margin:10px;"><h3>Los números generados son:</h3>';
        while (xn != x) {
            xn = (a * xn + c) % m;
            html += '<li class="list-group-item">' + xn + '</li>';
        }
        html += '</ul>';
        document.getElementById('result').innerHTML = html;
    }
}