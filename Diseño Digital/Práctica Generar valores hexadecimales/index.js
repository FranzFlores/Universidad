function print32bits() {
  var n0 = 0;
  var n1 = 1;
  var aux = 0;
  var array = [];

  //llenar el arreglo con 32 elementos
  array[0] = 1;
  for (var i = 1; i < 33; i++) {
    array.push(0);
  }

  //Arreglo con 1 ida
  console.log(array.toString());
  for (var i = 0; i < 32; i++) {
    aux = i + 1;
    array[aux] = n1;
    array[aux - 1] = n0;
    console.log(array.toString());
  }

  //Arreglo con 1 vuelta
  for (var i = 31; i >= -1; i--) {
    aux = i + 1;
    array[aux] = n1;
    array[aux + 1] = n0;
    console.log(array.toString());
  }
}

function randomNumbers() {
  var a = 1;
  var b = 0;
  var array = [];
  for (var i = 1; i <= 1024; i++) {
    while (a <= i) {
      if (i % a == 0) {
        b++;
      }
      a++;
    }
    a = 0;
    if (b == 2) {
      array.push(i);
    }
    b = 0;
  }

  for (var i = 0; i < array.length; i++) {
    console.log(array[i].toString(2));
  }
}
