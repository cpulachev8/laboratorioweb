function pintarRojo() {
    /* document.getElementById('rectangulo1').style.backgroundColor = "red";
    document.getElementById('rectangulo2').style.backgroundColor = "red";
    document.getElementById('rectangulo3').style.backgroundColor = "red"; */
    pintarRectangulo('red');
}

function pintarVerde() {
    /* document.getElementById('rectangulo1').style.backgroundColor = "green";
    document.getElementById('rectangulo2').style.backgroundColor = "green";
    document.getElementById('rectangulo3').style.backgroundColor = "green"; */
    pintarRectangulo('green');
}

function pintarAzul() {
    /* document.getElementById('rectangulo1').style.backgroundColor = "blue";
    document.getElementById('rectangulo2').style.backgroundColor = "blue";
    document.getElementById('rectangulo3').style.backgroundColor = "blue"; */
    pintarRectangulo('blue');
}

/***
 * Refactorizado
 */
function pintarRectangulo(color) {
    document.getElementById('rectangulo1').style.backgroundColor = color;
    document.getElementById('rectangulo2').style.backgroundColor = color;
    document.getElementById('rectangulo3').style.backgroundColor = color;
}

function cambiarTamanio(tamanio) {
    document.getElementById('rectangulo1').style.width = tamanio + '%';
    document.getElementById('rectangulo1').style.height = tamanio + '%';
    document.getElementById('rectangulo2').style.width = tamanio + '%';
    document.getElementById('rectangulo2').style.height = tamanio + '%';
    document.getElementById('rectangulo3').style.width = tamanio + '%';
    document.getElementById('rectangulo3').style.height = tamanio + '%';
}