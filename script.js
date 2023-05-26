
var textoentrada="";
var textosalida="";

function encriptartexto(){

    textoentrada=document.getElementById("texto-ingresado").value;

    textosalida=textoentrada.replaceAll("e","enter");
    textosalida=textosalida.replaceAll("i","imes");
    textosalida=textosalida.replaceAll("a","ai");
    textosalida=textosalida.replaceAll("o","ober");
    textosalida=textosalida.replaceAll("u","ufat");

    document.getElementById("salida-texto").style.display="none";

    document.getElementById("mostrar").style.display="block";

    var mostrartexto=document.getElementById("mostrar-resultado");
    
    mostrartexto.innerHTML=textosalida;

}

function desencriptartexto(){

    textoentrada=document.getElementById("texto-ingresado").value;

    textosalida=textoentrada.replaceAll("enter","e");
    textosalida=textosalida.replaceAll("imes","i");
    textosalida=textosalida.replaceAll("ai","a");
    textosalida=textosalida.replaceAll("ober","o");
    textosalida=textosalida.replaceAll("ufat","u");

    document.getElementById("salida-texto").style.display="none";

    document.getElementById("mostrar").style.display="block";

    var mostrartexto=document.getElementById("mostrar-resultado");
    
    mostrartexto.innerHTML=textosalida;

}

var mensaje=document.querySelector("#mostrar-resultado");

function copiartexto(mensaje){

    var copiar=document.createElement("input");

    copiar.setAttribute("value", mensaje.innerText);
    document.body.appendChild(copiar);
    copiar.select();
    document.execCommand('copy');
    document.body.removeChild(copiar);

    document.getElementById("copiado-alerta").style.transitionDuration="700ms";
    document.getElementById("copiado-alerta").style.opacity="1";

    setTimeout(()=>{

        document.getElementById("copiado-alerta").style.transitionDuration="700ms";
        document.getElementById("copiado-alerta").style.opacity="0";

    },1000);

}
