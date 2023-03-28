
const fs = require('fs')

function leerYAlmacenar (ruta){

    try{
        const data = fs.readFileSync(ruta, 'utf-8');
        console.log(data);
    }catch(algunError){
        console.log(algunError);
    }
}

module.exports = {
    leerYAlmacenar: leerYAlmacenar
};
