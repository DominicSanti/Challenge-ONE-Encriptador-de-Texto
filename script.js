
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

    console.log(textosalida);

}