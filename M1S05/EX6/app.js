/* M1S05 EX6*/

/* Dada a seguinte lista, utilizando o método forEach e salve no localstorage cada um dos elementos.
[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” ] */

var lista = [ "Banana", "Morango", "Maçã", "Uva", "Pêra"];

var salvarLocalSrorage = (index, valor)=>{
    localStorage.setItem(index , valor);
};

lista.forEach(elemento => salvarLocalSrorage(lista.indexOf(elemento), elemento)); 