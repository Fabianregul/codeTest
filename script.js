//NOTA: Siempre documentar, comentar el codigo

function suma() {

    //1 - declaracion y parseo de variables   
    const num_uno = parseInt(document.getElementById("num_uno").value);
    const num_dos = parseInt(document.getElementById("num_dos").value);
    const resultado = document.getElementById("resultado");
    
    //2 - verificacion - campos vacios
    if (isNaN(num_uno) || isNaN(num_dos)) {
            alert("Por favor, ingresa solo números.");
        }
    
    //3 - operacion
    let operacion;
    let operacionTexto;

    //3.1 - Determinar qué operación está seleccionada
    if (document.getElementById("suma").checked) {
        operacion = num_uno + num_dos;
        operacionTexto = "Suma";
    } else if (document.getElementById("resta").checked) {
        operacion = num_uno - num_dos;
        operacionTexto = "Resta";
    } else if (document.getElementById("multiplicacion").checked) {
        operacion = num_uno * num_dos;
        operacionTexto = "Multiplicación";
    } else if (document.getElementById("division").checked) {
        if (num_dos === 0) {
            alert("La división por cero no está permitida.");
            return;
        }
        operacion = num_uno / num_dos;
        operacionTexto = "División";
    } else {
        alert("Por favor, selecciona una operación.");
        return;
    }

    //4 - imprimiendo resultado con plantillas
    resultado.innerText = `El resultado de la ${operacionTexto} es: ${operacion}`;;
    
    //5 - tabla
    //5.1 - Agregar el resultado a la tabla
    const tablaResultados = document.getElementById("tablaResultados").getElementsByTagName('tbody')[0];
    const nuevaFila = tablaResultados.insertRow();

    //5.2 - Insertar celdas en la nueva fila
    let celdaNumUno = nuevaFila.insertCell(0);
    let celdaNumDos = nuevaFila.insertCell(1);
    let celdaResultado = nuevaFila.insertCell(2);

    //5.3 - Agregar el contenido a las celdas
    celdaNumUno.innerText = num_uno;
    celdaNumDos.innerText = num_dos;
    celdaResultado.innerText = operacion;
    
    //6 - Limpiar los inputs y enfocar el primer input
    document.getElementById("num_uno").value = "";
    document.getElementById("num_dos").value = "";
    document.getElementById("num_uno").focus(); // Enfocar el primer input

    //7 - VENTANA MODAL:

    // Obtener el modal
    var modalTabla = document.getElementById("modalTabla");

    // Obtener el botón que abre el modal
    var btnVerTabla = document.getElementsByTagName("button")[1];

    // Obtener el <span> que cierra el modal
    var spanCerrar = document.getElementsByClassName("close")[0];

    // Cuando el usuario hace clic en el botón "VER TABLA", abre el modal
    btnVerTabla.onclick = function() {
        modalTabla.style.display = "block";
    }

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    spanCerrar.onclick = function() {
        modalTabla.style.display = "none";
    }

    // Cuando el usuario hace clic en cualquier lugar fuera del modal, lo cierra
    window.onclick = function(event) {
        if (event.target == modalTabla) {
            modalTabla.style.display = "none";
        }
}


    
    }