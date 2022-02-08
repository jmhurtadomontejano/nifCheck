
//
const net = require('net');
//creo el servidor
const server = net.createServer()

//el connection espera la comunicacion del cliente y la guarda en la variable socket
server.on('connection', (socket) => {
  //socket.on recibe los datos del cliente y los guardo en la variable data
  socket.on('data', (dniConLetra) => {
    if (dniConLetra != 'inicio') {
      console.log('\DNI recibido desde el cliente: = ' + dniConLetra +'\t')
      //añadimos una respuesta del servidor al cliente con socket.write
      socket.write('DNI recibido en el servidor: = ' + dniConLetra +', confirmacion a cliente\t')
      comprobarNif(dniConLetra)
    } else {
      console.log('\Mensaje recibido desde el cliente\t')
  }
  })

  socket.on('close', () => {
    console.log('\Comunicación Finalizada\t')
  })

  socket.on('error', (err) => {
    console.log(err.message)
  })
})

server.listen(4000, () => {
  console.log('Servidor escuchando en la puerta:', server.address().port)
})

function comprobarNif(dniConLetra) {
  console.log('Funcion ComprobarNIF: ' + dniConLetra + '\t')
  var numero
  var letr
  var letra
  console.clear;

  /*
  numero = dniConLetra.substr(0, dniConLetra.length - 1);
  letr = dniConLetra.substr(dniConLetra.length - 1, 1);
  resto = numero % 23;
  letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
  letra = letra.substring(resto, resto + 1);
  if (letra != letr.toUpperCase()) {
    console.log('Dni erroneo, la letra del NIF:"' + letr + '" no se corresponde con el numero "' + numero + '"');
    //añadimos una respuesta del servidor con socket.write
    socket.write('Dni erroneo, la letra del NIF:"' + letr + '" no se corresponde con el numero "' + numero + '"')
  } else {
    console.log('Dni correcto');
    //añadimos una respuesta del servidor con socket.write
    socket.write('DNI CORRECTO')
  }*/
}