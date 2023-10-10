// Definimos una clase"
class FiguraGeometrica {
   constructor(nombre) {
        this.nombre = nombre;
    }
    area(){
        return 0
    }
    perimetro(){
        return 0
    }
}

 // circulo "

 class Circulo extends FiguraGeometrica {
    constructor (radio){
        super("Circulo");
        this.radio = radio;
    }
    area(){
        return 3.14 * this.radio ** 2
    }
    perimetro() {
        return 2 * 3.14 * this.radio
      }
 }
 const circulo = new Circulo (6);
 console.log(`Figura: ${Circulo.name} - Radio: ${circulo.radio}, Area: ${circulo.area()}, Perimetro: ${circulo.perimetro()}`);

 // cuadrado"

 class Cuadrado extends FiguraGeometrica {
    constructor (lado){
        super("Cuadrado");
        this.lado = lado;
    }
    area(){
        return this.lado ** 2
    }
    perimetro() {
        return 4 * this.lado
      }
 }
 const cuadrado = new Cuadrado (6);
 console.log(`Figura: ${Cuadrado.name} - Lado: ${cuadrado.lado}, Area: ${cuadrado.area()}, Perimetro: ${cuadrado.perimetro()}`);

 // rectangulo"

 class Rectangulo extends FiguraGeometrica {
    constructor (largo, ancho,){
        super("Rectangulo");
        this.largo = largo;
        this.ancho = ancho;
    }
    area(){
        return this.largo * this.ancho
    }l
    perimetro() {
        return 2 * (this.largo + this.ancho)
      }
 }
 const rectangulo = new Rectangulo (6, 8);
 console.log(`Figura: ${Rectangulo.name} - Largo: ${rectangulo.largo}, Ancho: ${rectangulo.ancho}, Area: ${rectangulo.area()}, Perimetro: ${rectangulo.perimetro()}`);