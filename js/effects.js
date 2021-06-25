/**************** EFECTO 1 *******************/
var idIntevalo = null;

function iniciar() {
    idIntevalo = setInterval(saludar, 2000);
}

function saludar() {
    console.log('hola');
}

function detener() {
    clearInterval(idIntevalo);
}

/**************** EFECTO 2 *******************/
var intervaloPelota = null;
var distancia = 0;

function lanzarPelota() {
    pararPelota();
    intervaloPelota = setInterval(lanzar, 200);
}

function lanzar() {
    var pelota = document.getElementById('pelota');
    distancia = distancia + 20;
    if (distancia <= 1100) {
        pelota.style.left = distancia + 'px';
    } else {
        regresarPelota();
    }
}

function pararPelota() {
    clearInterval(intervaloPelota);
}

function regresarPelota() {
    pararPelota(intervaloPelota);
    intervaloPelota = setInterval(regresar, 200);
}

function regresar() {
    var pelota = document.getElementById('pelota');
    distancia -= 20;
    if (distancia >= 0) {
        pelota.style.left = distancia + 'px';
    } else {
        pararPelota();
    }
}


/**************** EFECTO 3 Y EFECTO 4 *******************/
window.onload = function() {
    var boton = document.getElementById('boton');
    var caja = document.getElementById('caja');
    boton.addEventListener('click', function() {
        caja.classList.toggle('relleno');
    });

    /**************** EFECTO 4 *******************/
    var boton2 = document.getElementById('boton2');
    var caja1 = document.getElementById('caja1');
    var caja2 = document.getElementById('caja2');
    boton2.addEventListener('click', function() {
        caja1.classList.toggle('mostrar');
        caja2.classList.toggle('oculto');
    });
}