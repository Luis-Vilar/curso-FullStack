var numero1 = 0;
var numero2 = 0;

function pedirNumeros() {
alert(`O intuito de esta app e comparar números diferentes...`)
  numero1 = Number(prompt(`Digite um numero`));
  numero2 = Number(prompt(`Digite outro numero`));
  compara();
}

function compara(){
    if (numero1 == numero2) {
        pedirNumeros();
      } else if (numero1 > numero2) {
        alert(`O numero ${numero1} e maior que ${numero2}`);
      } else {
        alert(`O numero ${numero2} e maior que ${numero1}`);
      }

}

pedirNumeros();