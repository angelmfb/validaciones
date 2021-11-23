/**

    validaciones.js
    script para validar un formulario
    @author angel correo
    @license GPL v3 2021
**/

'use strict'

window.onload = iniciar 

function iniciar(){
    let formulario = document.forms[0]
    formulario.onsubmit = validar
}

function validar(evento){
    console.log("estoy validando");
    var apellidos = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var apellido = document.getElementById('iApellidos').value;

    var nif = /^[0-9]{8}[A-Z]{1}/;
    var nif2 = document.getElementById('iNIF').value;
    /*
    var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/;
    var mail2 = document.getElementById('iEmail').value;

    var telefono = /^[0-9]{9}/;
    var telefono2 = document.getElementById('iTelefono').value;*/

    var selectPrincipal = document.getElementById('sComunidad');
    var selectSecundario = document.getElementById('secundario');

    if(document.getElementById('iNombre').value.length < 2){
        return false
        alert("nombre incorrecto")
    }
    else if (!apellidos.test(apellido)) {
        alert ("apellido incorrecto")
        return false
    }
    
    else if (!nif.test(nif2)) {
        alert ("NIF incorrecto")
        return false
    }/*
    else if (!mail.test(mail2)) {
        alert ("Email incorrecto")
        return false
    }
    else if (!telefono.test(telefono2)) {
        alert ("Telefono incorrecto")
        return false
    }*/
    else if (!document.getElementById('iNo').value == "si") {
        alert ("No eres Asturiano")
        return false
    }
    else if(selectPrincipal.value == 11) {
        selectSecundario.disabled = false
        selectSecundario.required = true
    } 
    else if(!document.getElementById('iPolitica').checked)
        return false
    //evento.preventDefault()
    //return false
   
    //return false
    
}