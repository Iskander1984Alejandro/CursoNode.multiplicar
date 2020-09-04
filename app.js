//const multiplicar = require('./multiplicar/multiplicar'); //se omite el .js
const argv = require('./config/yargs').argv
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let argv2 = process.argv;

let comando = argv._[0];
switch (comando) {
    case 'listar':
        // (async() => {
        //     console.log(await listarTabla(argv.base, argv.limite));
        // })();
        console.log(listarTabla(argv.base, argv.limite));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let parametro = process.argv[2];
// let base = parametro.split('=')[1];