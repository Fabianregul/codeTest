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
    let operacion = num_uno + num_dos;
    
    //4 - imprimiendo resultado con plantillas
    resultado.innerText = `el resultado es: ${operacion}`;
    
    //5 - tabla
    // Agregar el resultado a la tabla
    const tablaResultados = document.getElementById("tablaResultados").getElementsByTagName('tbody')[0];
    const nuevaFila = tablaResultados.insertRow();

    // Insertar celdas en la nueva fila
    let celdaNumUno = nuevaFila.insertCell(0);
    let celdaNumDos = nuevaFila.insertCell(1);
    let celdaResultado = nuevaFila.insertCell(2);

    // Agregar el contenido a las celdas
    celdaNumUno.innerText = num_uno;
    celdaNumDos.innerText = num_dos;
    celdaResultado.innerText = operacion;
    
    }