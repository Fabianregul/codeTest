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
    
    
    }