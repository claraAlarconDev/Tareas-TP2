const miModulo1 = require("./miModulo1.js")
const miModulo2 = require("./miModulo2.js")

miModulo1.leerYAlmacenar('./data.txt');
console.log('----------------------------')
miModulo2.escribir('./data.txt', 'prueba 2\n');

miModulo1.leerYAlmacenar('./data.txt')


