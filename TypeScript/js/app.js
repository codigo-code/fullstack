"use strict";
function saludar() {
    return "hola mundo";
}
var logger;
logger = mostrarMensaje;
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
function hola() {
    logger('hola pedorros');
}
function clasePersona() {
    var p = new Persona('tito');
    logger(p.getNombre());
}
function apretame() {
    var inputText = document.getElementById("nombre");
    console.log(inputText.value);
}
var Persona = (function () {
    function Persona(nombre) {
        this.nombre = nombre;
        this._nombre = nombre;
    }
    Persona.prototype.setNombre = function (nombre) {
        this._nombre = nombre;
    };
    Persona.prototype.getNombre = function () {
        return this._nombre;
    };
    return Persona;
}());
//# sourceMappingURL=app.js.map