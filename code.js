// Crear una función con tres parámetros que sean números que se suman entre sí. Llamar a la función en el main y darle valores.
function suma(a, b, c){
  console.log(a + b + c);
};
suma(1, 2, 3);
// Crear una clase coche. Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene. Una función que incremente el número de puertas que tiene el coche. Crear un objeto miCoche en el main y añadirle una puerta. Mostrar el número de puertas que tiene el objeto
class Coche{
  constructor (numeroDePuertas){
    this._numeroDePuertas = numeroDePuertas;
  }
};
function agregarPuerta(coche){
  coche._numeroDePuertas++
};
var miCoche = new Coche(0);
agregarPuerta(miCoche);
console.log(miCoche._numeroDePuertas);
