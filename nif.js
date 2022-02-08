


//importo la libreria callback
const fs = require('fs');


/*  console.log('==============')
    console.log('TABLA DEL 5');const base = 5;
for (let i=0;i<=10;i++){
    console.log(`${base}*${i}= ${base * i}`)
}*/


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
comprobarNif("06268333M")