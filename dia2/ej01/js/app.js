function holaMundo() {
    console.log(devolverNombre());
    var persona = new Persona(devolverNombre());
    persona.setNombreApellido(devolverNombre());
    var mensaje = document.getElementById("mensaje");
    mensaje.innerText = persona.getNombreApellido();
}
function devolverNombre() {
    var nombre = document.getElementById("nombre");
    return nombre.value;
}
var Persona = (function () {
    function Persona(nombre_apellido) {
        this.nombre_apellido = nombre_apellido;
    }
    Persona.prototype.setNombreApellido = function (nombre_apellido) {
        this.nombre_apellido = nombre_apellido;
    };
    Persona.prototype.getNombreApellido = function () {
        return this.nombre_apellido;
    };
    return Persona;
}());
//# sourceMappingURL=app.js.map