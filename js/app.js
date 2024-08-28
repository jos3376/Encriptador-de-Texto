function obtenerId(element) {
    return document.getElementById(element);
}
function alertaEdit() {
    Swal.fire({
        title: '¡Alerta!',
        text: 'No se permiten mayúsculas, tildes, caracteres especiales o campo vacío.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
    });
}

var textarea = obtenerId('textarea');
var respuestaEncriptado = obtenerId('respuesta_encriptado');
var btnCopiar = obtenerId('btnCopiar');
var botonSection2 = obtenerId('boton_section2');
var ocultarObjetos = document.getElementsByClassName('section2_ocultar');

textarea.addEventListener('mousedown', function () {
    btnCopiar.innerHTML = 'Copiar';
});

btnCopiar.addEventListener('click', function () {
    navigator.clipboard.writeText(respuestaEncriptado.value);
    btnCopiar.innerHTML = '<span style="font-weight: bold">Copiado</span>';
});

function mostrarElementosInicio() {
    for (let i = 0; i < ocultarObjetos.length; i++) {
        ocultarObjetos[i].style.display = "";
    }
    respuestaEncriptado.style.display = "none";
    btnCopiar.innerHTML = 'Copiar';
    botonSection2.style.display = "none";
}

textarea.addEventListener('input', function () {
    if (textarea.value.trim() === "") {
        mostrarElementosInicio();
    }
});

function ocultarYMostrarRespuesta() {
    for (let i = 0; i < ocultarObjetos.length; i++) {
        ocultarObjetos[i].style.display = "none";
    }
    respuestaEncriptado.style.display = "flex";
    botonSection2.style.display = "flex";
    btnCopiar.innerHTML = 'Copiar';
}

function contieneMayusculasOTildes(texto) {
    return /[A-ZÁÉÍÓÚáéíóú]/.test(texto)
        || /[^a-zA-Z0-9 \n]/.test(texto)
        || texto.trim() === '';
}

function encriptadoDesencriptado(textValue, textoAEncriptar) {
    let textoAEncriptado = "";
    let textoADesencriptado = "";
    if (textValue === "encriptarTexto") {
        textoAEncriptado = textoAEncriptar
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");
        respuestaEncriptado.value = textoAEncriptado;
    } else {
        textoADesencriptado = textoAEncriptar
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
        respuestaEncriptado.value = textoADesencriptado;
    }
}

function encriptar() {
    let textoAEncriptar = textarea.value.trim();
    if (contieneMayusculasOTildes(textoAEncriptar)) {
        alertaEdit();
    } else {
        ocultarYMostrarRespuesta();
        encriptadoDesencriptado("encriptarTexto", textoAEncriptar);
    }
}

function desencriptar() {
    let textoAEncriptar = textarea.value.trim();
    if (contieneMayusculasOTildes(textoAEncriptar)) {
        alertaEdit();
    } else {
        ocultarYMostrarRespuesta();
        encriptadoDesencriptado("desencriptar", textoAEncriptar);
    }
}

document.getElementById('btnEncriptar').addEventListener('click', encriptar);
document.getElementById('btnDesencriptar').addEventListener('click', desencriptar);