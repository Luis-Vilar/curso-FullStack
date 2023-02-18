var peso = Number(prompt("Qual peso do carro em kilos?"));
var comprimento = Number(prompt("Qual comprimento do carro em metros?"));

if (peso <= 1500 && comprimento <= 5) {
    alert(`Seu carro de ${peso} kg e ${comprimento} metros esta liberado para atravessar a ponte`);
} else {
    alert(`Seu carro de ${peso} kg e ${comprimento} metros não esta liberado para atravessar a ponte`);
}