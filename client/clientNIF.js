
//añado require para poder hacer la conexión
const net = require('net');
//añado require para poder introducir datos por consola
const readline = require('readline-sync')
//importo la libreria callback
const fs = require('fs');

//establezco las opciones para comunicarme con el servidor
// puerto:4000, host:localhost
const options = {
    port: 4000,
    host: '127.0.0.1'
}

//creo una conexion por socket, por cliente y le añado las options configuradas antes
const client = net.createConnection(options)

//compruebo la conexion
client.on('connect', () => {
    console.log('conexion existosa')
    //envio un mensaje al servidor
   // client.write('Mensaje desde el cliente para el servidor. este mensaje debe verse en el server')
   client.write('inicio') 
   //llamada a la funcion introducirNIF
    introducirNIF()
})

//recibir respuesta del servidor
client.on('data', (data) => {
    console.log('El servidor responde: ' + data)
    introducirNIF()
})


client.on('error', (err) => {
    console.log(err.message)
})

//funcion para recoger datos introducidos en consola
function introducirNIF() {
    var dniConLetra = readline.question("\Introduce el numero de DNI que quieres comprobar. Introduce 0 para finalizar\t");
    if (dniConLetra == "0") {
        client.end()
        close();
    } else {
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
        console.log("Vamos a comprobar el NIF: " + dniConLetra)
        if (expresion_regular_dni.test(dniConLetra) == true) {
            console.log('Dni '+ dniConLetra+' correcto. Vamos a enviarlo al servidor');
   //si el DNI está bien, llamo a la funcion sendNIF para enviar el DNI al servidor
            sendNIF(dniConLetra)
        } else {
            console.log('Dni erroneo. El DNI debe contener 8 numeros seguido de 1 letra');
            introducirNIF()
        }

    }
}

function sendNIF(dniConLetra) {
    //client.write. Para escribir contenido y enviarlo al servidor 
    client.write(dniConLetra)
}


/*  console.log('==============')
    console.log('TABLA DEL 5');const base = 5;
for (let i=0;i<=10;i++){
    console.log(`${base}*${i}= ${base * i}`)
}*/

/*
function calcletra(dni) {
    console.clear;
    console.log('==============')
    console.log('CALCULAR LETRA DNI');


    var JuegoCaracteres = "TRWAGMYFPDXBNJZSQVHLCKET"
    var Posicion = dni % 23
    var Letra = JuegoCaracteres.charAt(Posicion)
    console.log("La letra del DNI Nº:"+dni +", es la letra:"+Letra)
    console.log('')
    return Letra
}



function comprobarNif(dniConLetra) {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    console.clear;
    console.log('==============')
    console.log('COMPROBAR NIF CON LETRA');
    

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    console.log("Vamos a comprobar el NIF: " + dniConLetra)
    if (expresion_regular_dni.test(dniConLetra) == true) {
        numero = dniConLetra.substr(0, dniConLetra.length - 1);
        letr = dniConLetra.substr(dniConLetra.length - 1, 1);
        resto = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(resto, resto + 1);
        if (letra != letr.toUpperCase()) {
            console.log('Dni erroneo, la letra del NIF:"' + letr  +'" no se corresponde con el numero "' + numero+'"');
        } else {
            console.log('Dni correcto');
        }
    } else {
        console.log('Dni erroneo. El DNI debe contener 8 numeros seguido de 1 letra');
    }
}

calcletra("06268333")
comprobarNif("06268333M")*/