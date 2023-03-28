const fs = require('fs')

function escribir(ruta, variable){
    try{
            fs.appendFileSync(ruta, variable)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    escribir : escribir
}; 