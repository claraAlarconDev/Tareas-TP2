/*crear un programa en JavaScript que use la librería async.js 
para resolver una tarea asincrónica por ejemplo sumar una serie de números  */


const async = require('async');


function saludar(a, callback){
    let saludo = "Hola " + a;
   setTimeout (() => {
        callback(null, saludo);
      }, Math.random() * 1000); 
}
function despedir(b, callback){
    let despedida = "Adios, " + b;
    setTimeout (() => {
        callback(null, despedida);
      }, Math.random() * 1000); 
}

async.parallel({
    1: function(nombre,callback){
      console.log(saludar(nombre,callback));
    },
    2: function(nombre, callback){
       console.log(despedir(nombre, callback));
    },
    function(err, callback){
        if(err){
            console.error('Error:', err);
            return;
        }
    }
})



