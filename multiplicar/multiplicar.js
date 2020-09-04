//requireds
const fs = require('fs');
var colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    console.log('========='.green);
    console.log(`Tabla del ${ base } hasta ${ limite }`.green);
    console.log('========='.green);
    data = getTablaString(base, limite);
    return data;

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`En vez de "${base}", pon un numero criaturica...`);
            return;
        }

        // for (let i = 1; i <= limite; i++) {
        //     data += `${base} * ${i} = ${base*i}\n`;
        // }

        data = getTablaString(base, limite);

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                let respuesta = 'Archivo creado: ' + `tabla-${base}-${limite}.txt`.green;
                resolve(respuesta);
                //resolve(`Archivo creado: tabla-${base}-${limite}.txt`);
            }
        });
    })
}

let getTablaString = (base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`En vez de "${base}", pon un numero criaturica...`);
    }
    if (!Number(limite)) {
        throw new Error(`El limite "${limite}" no mola nada`)
    }
    if (limite < 1) {
        throw new Error(`El limite debe ser mayor que cero`);
    }
    let cadena = '';

    for (let i = 1; i <= limite; i++) {
        cadena += `${base} * ${i} = ${base*i}\n`;
    }

    return cadena;
}


module.exports = {
    crearArchivo,
    listarTabla
}