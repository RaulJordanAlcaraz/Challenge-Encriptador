let btnEncriptar = document.querySelector(".botonEncriptador");
let btnDesencriptar = document.querySelector(".botonDesencriptador");
let personaje = document.querySelector(".contenedorPersonaje");
let contenedorEncriptado = document.querySelector(".contenedorTextoEncriptado");
let resultados = document.querySelector(".resultado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    let cajaDeTexto = recuperarTexto();
    resultados.textContent = encriptarTexto(cajaDeTexto);
};

function desencriptar(){
    ocultarAdelante();
    let cajaDeTexto = recuperarTexto();
    resultados.textContent = desencriptarTexto(cajaDeTexto);
};

function recuperarTexto(){
    let cajaDeTexto = document.querySelector(".cajaTexto");
    return cajaDeTexto.value;
};

function ocultarAdelante(){
    personaje.classList.add("ocultar");
    contenedorEncriptado.classList.add("ocultar");
};

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
};

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i =0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i += 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i += 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i += 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i += 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i += 3;
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
};

const btnCopiar = document.querySelector(".botonCopiar");
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
});