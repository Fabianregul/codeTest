const caja_uno = parseInt(document.getElementById("caja_uno").value);
const caja_dos = parseInt(document.getElementById("caja_dos").value);
const resultado = document.getElementById("resultado");

let operacion = caja_uno + caja_dos;
resultado.innerText = `el resultado es: ${operacion}`;