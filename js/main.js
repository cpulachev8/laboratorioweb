function mostrarMensajeOld(mensaje) {
    console.log(mensaje);
    alert(retornaMensaje());
}

/**
 * Función del tipo void
 * Característica al final de la función no tiene la palabra "return"
 */
function reservarHabitacion() {
    var ciudad = 
        document.getElementById('cbxCiudades').value;
    var cantHuespedes = 
        document.getElementById('txtCantHuespedes').value;
    
    if (cantHuespedes == '') {
        mostrarMensaje('Cantidad de Huéspedes es Vacío');
    } else {
        alert('El valor de ciudad es ' + ciudad
            + '\r\nLa cantidad de huéspedes es ' + cantHuespedes);
    }
}

function ocultarMensaje() {
    document.getElementById('content-message')
        .style.display = 'none';
}

function mostrarMensaje(mensaje) {
    console.log(document.getElementById('content-message'));
    console.log(document.getElementById('txtCantHuespedes'));
    console.log(document.getElementById('cbxHoteles'));
   /*  document.getElementById('content-message')
        .innerHTML = mensaje;
    document.getElementById('content-message')
        .style.display = 'block'; */
}

/**
 * Función con retorno
 * Característica al final de la función está la palabra "return"
 */
function retornaMensaje() {
    return "Mensaje de respuesta";
}

/**
 * Ejemplo de ejecución
 */

function sumar(a, b) {
    var suma = a + b;
    return suma;
}

function calculadora() {
    var a = 10;
    var b = 5;
    var resultado = sumar(a, b);
    alert("Suma: "+resultado);
}

/******************** 29/05/2021 ******************************/
function cambiarColor() {
    document.getElementById('lblTitulo').style.color = 'red';
    document.getElementById('lblCiudad').style.color = 'red';
    document.getElementById('lblHotel').style.color = 'red';
    document.getElementById('lblCantHuespedes').style.color = 'red';
}