/* arreglo de cadenas, Tamaño del arreglo 5 */
/* var alumnos = ["Claudia", "Ana", "Kevin", "Ángel", "Víctor", "Christian"]; */

window.addEventListener('load', function() {
    var cuerpoTabla = document.querySelector("#tblAlumnos tbody");
    if (cuerpoTabla != null) {
        limpiarTabla(cuerpoTabla);
        listarAlumnos();
    }
});

function listarAlumnos() {
    /* console.log("Elemento 1", alumnos[0]);
    console.log("Elemento 2", alumnos[1]);
    console.log("Elemento 3", alumnos[2]);
    console.log("Elemento 4", alumnos[3]);
    console.log("Elemento 5", alumnos[4]); */
    var valAlumnos = localStorage.getItem("alumnos");
    if (valAlumnos != null && valAlumnos != '') {
        var arrAlumnos = valAlumnos.split(',');
        for (var i = 0; i < arrAlumnos.length; i++) {
            /* console.log("indice ", i);
            console.log("Valor del índice ", alumnos[i]); */
            /* Crear elemento TR y agregar a la tabla */
            var fila = document.createElement("tr");
            /* var tabla = document.getElementById("tblAlumnos"); */
            var cuerpoTabla = document.querySelector("#tblAlumnos tbody");
            cuerpoTabla.appendChild(fila);

            /*Agregar las columnas*/
            var celdaCodigo = document.createElement("td");
            fila.appendChild(celdaCodigo);
            var celdaNombre = document.createElement("td");
            fila.appendChild(celdaNombre);
            var celdaOpciones = document.createElement("td");
            fila.appendChild(celdaOpciones);

            /*Agregar valores a las celdas*/
            var valorCodigo = document.createTextNode(i + 1);
            celdaCodigo.appendChild(valorCodigo);
            var valorNombre = document.createTextNode(arrAlumnos[i]);
            celdaNombre.appendChild(valorNombre);
            var btnEliminar = document.createElement("button");
            btnEliminar.innerHTML = 'Eliminar';
            btnEliminar.setAttribute('onclick', 'eliminarAlumno(this)');
            celdaOpciones.appendChild(btnEliminar);
        }
    }
}

function agregarAlumno() {
    var nombre = document.getElementById("nombre").value;
    /* alumnos.push(nombre.value); */
    var valAlumnos = localStorage.getItem("alumnos");
    console.log(valAlumnos);
    var arrAlumnos;
    if (valAlumnos != null && valAlumnos != '') {
        arrAlumnos = valAlumnos.split(',');
    } else {
        arrAlumnos = [];
    }
    arrAlumnos.push(nombre);
    localStorage.setItem("alumnos", arrAlumnos);
    alert('Alumno agregado satisfactoriamente');
    setTimeout(function() {
        location.href = '/pages/lista.html';
    }, 1000);
}

function limpiarTabla(cuerpoTabla) {
    if (cuerpoTabla != null) {
        cuerpoTabla.innerHTML = "";
    }
}

function eliminarAlumno(row) {
    console.log(row);
    var index = row.parentNode.parentNode.rowIndex;
    console.log(index);
    document.getElementById("tblAlumnos").deleteRow(index);
    var arrAlumnos = localStorage.getItem("alumnos").split(',');
    arrAlumnos = eliminarItem(arrAlumnos, index - 1);
    localStorage.setItem("alumnos", arrAlumnos);
}

function eliminarItem(array, index) {
    var arrayNuevo = [];
    for (var i = 0; i < array.length; i++) {
        if (index != i) {
            arrayNuevo.push(array[i]);
        }
    }
    return arrayNuevo;
}