class FormaGeometrica {
    constructor(medidas) {
        this.medidas = medidas;
    }
    calcularArea() {
        throw new Error("Metodo calcularArea deve ser implementado nas classes filhas")
    }
    calcularPerimetro() {
        throw new Error("Metodo calcularPerimetro deve ser implementado nas classes filhas")
    }
}

class Quadrado extends FormaGeometrica {
    calcularArea() {
        return this.medidas.lado * this.medidas.lado;

    }
    calcularPerimetro() {
        return 4 * this.medidas.lado;
    }
}

class Circulo extends FormaGeometrica {
    calcularArea() {
        return Math.PI * this.medidas.raio * this.medidas.raio;

    }
    calcularPerimetro() {
        return 2 * Math.PI * this.medidas.raio;
    }
 }
 
class Triangulo extends FormaGeometrica { 
    calcularArea() {
        return (this.medidas.base * this.medidas.altura) / 2;
    }
    calcularPerimetro() {
        return this.medidas.lado1 + this.medidas.lado2 + this.medidas.lado3;
    }
}


// Testes
const quadrado = new Quadrado({lado : 5})
console.log('Área do quadrado:', quadrado.calcularArea());
console.log('Perímetro do quadrado:', quadrado.calcularPerimetro());

const circulo = new Circulo({ raio: 3 });
console.log('Área do círculo:', circulo.calcularArea());
console.log('Perímetro do círculo:', circulo.calcularPerimetro());

const triangulo = new Triangulo({ base: 4, altura: 6, lado1: 3, lado2: 4, lado3: 5 });
console.log('Área do triângulo:', triangulo.calcularArea());
console.log('Perímetro do triângulo:', triangulo.calcularPerimetro());