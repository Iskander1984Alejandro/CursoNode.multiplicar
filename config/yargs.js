const opcionesComando = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar,', opcionesComando)
    .command('crear', 'Crea un fichero con la tabla indicada', opcionesComando)
    .help()
    .argv;

module.exports = {
    argv
}