const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function para manejar arrays

//función para buscar un elemento en un array
function buscarElementoArray(elemento, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == elemento) {
      return `El elemento ${elemento} fue encontrado en la posición ${i}`;
    }
  }
  return `El elemento ${elemento} no fue encontrado en la lista`;
}

// función eliminar elemento de una lista
function eliminarElementoArray(elemento, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == elemento) {
      array.splice(i, 1);
      return `El elemento ${elemento} fue eliminado de la lista ${array}`;
    }
  }
  return `El elemento ${elemento} no fue encontrado en la lista`;
}

// función para agregar un elemento a un array
function agregarElementoArray(elemento, array) {
  array.push(elemento);
  return `El elemento ${elemento} fue agregado a la lista`;
}

// función para mostrar los elementos de un array
function mostrarElementosArray(array) {
  return array.map((elemento) => {
    return elemento;
  });
}
//funciones para sumar todos los elementos de un array de números
function sumarElementosArray(array) {
    return array.reduce((a, b) => {
        return a + b;
    });
    }


//funcione para devolver  un N de la serie de fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// función para devolver un array con una serie de fibonacci

function fibonacciArray(n) {
    var array = [];
    for (var i = 0; i < n; i++) {
        array.push(fibonacci(i));
    }
    return array;
}

//f