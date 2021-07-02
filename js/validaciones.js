/* Eventos del teclado
1. onkeydown: Se activa al presionar un tecla
2. onkeypress: Evento a un nivel más bajo.Intermedio entre onkeydown y onkeyup
3. onkeyup: Se activa al dejar presionar una tecla */

function validarTexto(event) {
    console.log(event.keyCode);
    /*  if (event.keyCode == 8 || !(event.keyCode >= 48 && event.keyCode <= 59)) {
         return true;
     }
     return false; */
    return (event.keyCode == 8 || !(event.keyCode >= 48 && event.keyCode <= 59));
}

function validarNumero(event) {
    /* if (event.keyCode == 8 || (event.keyCode >= 48 && event.keyCode <= 59)) {
        return true;
    }
    return false; */
    return (event.keyCode == 8 || (event.keyCode >= 48 && event.keyCode <= 59));
}